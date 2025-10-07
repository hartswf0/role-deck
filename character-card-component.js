// Character Profile Card Component with Radar Chart
// Styled for Feed Loop / TILTH aesthetic

function createRadarChartSVG(metrics, color = '#5a6c57') {
    const size = 200;
    const center = size / 2;
    const radius = size * 0.35;
    const numAxes = 11;
    
    // Axes: openness, conscientiousness, extraversion, agreeableness, neuroticism, 
    //       logic, empathy, authority, risk, uncertainty, decisiveness
    const axisLabels = [
        'Open', 'Consci', 'Extra', 'Agree', 'Neuro',
        'Logic', 'Empathy', 'Auth', 'Risk', 'Uncert', 'Decisive'
    ];
    
    const metricsArray = [
        metrics.openness,
        metrics.conscientiousness,
        metrics.extraversion,
        metrics.agreeableness,
        metrics.neuroticism,
        metrics.logic,
        metrics.empathy,
        metrics.authority,
        metrics.risk,
        metrics.uncertainty,
        metrics.decisiveness
    ];
    
    // Calculate polygon points
    const points = metricsArray.map((value, i) => {
        const angle = (Math.PI * 2 * i) / numAxes - Math.PI / 2;
        const r = (value / 5) * radius; // Scale 1-5 to radius
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return `${x},${y}`;
    }).join(' ');
    
    // Calculate axis lines
    const axes = axisLabels.map((label, i) => {
        const angle = (Math.PI * 2 * i) / numAxes - Math.PI / 2;
        const x2 = center + radius * Math.cos(angle);
        const y2 = center + radius * Math.sin(angle);
        
        // Label position (slightly beyond radius)
        const labelR = radius * 1.15;
        const labelX = center + labelR * Math.cos(angle);
        const labelY = center + labelR * Math.sin(angle);
        
        return `
            <line x1="${center}" y1="${center}" x2="${x2}" y2="${y2}" 
                  stroke="rgba(232, 228, 216, 0.2)" stroke-width="1"/>
            <text x="${labelX}" y="${labelY}" 
                  fill="rgba(232, 228, 216, 0.6)" 
                  font-size="10" 
                  font-family="Orbitron, monospace"
                  text-anchor="middle" 
                  dominant-baseline="middle">
                ${label}
            </text>
        `;
    }).join('');
    
    // Concentric circles for scale
    const circles = [1, 2, 3, 4, 5].map(scale => {
        const r = (scale / 5) * radius;
        return `<circle cx="${center}" cy="${center}" r="${r}" 
                        fill="none" stroke="rgba(232, 228, 216, 0.1)" stroke-width="1"/>`;
    }).join('');
    
    return `
        <svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            ${circles}
            ${axes}
            
            <!-- Data polygon -->
            <polygon points="${points}" 
                     fill="${color}" 
                     fill-opacity="0.3" 
                     stroke="${color}" 
                     stroke-width="2" 
                     filter="url(#glow)"/>
            
            <!-- Data points -->
            ${metricsArray.map((value, i) => {
                const angle = (Math.PI * 2 * i) / numAxes - Math.PI / 2;
                const r = (value / 5) * radius;
                const x = center + r * Math.cos(angle);
                const y = center + r * Math.sin(angle);
                return `<circle cx="${x}" cy="${y}" r="3" fill="${color}"/>`;
            }).join('')}
        </svg>
    `;
}

function renderCharacterCard(character) {
    const cardColor = character.career_risk_taken > 0.6 ? '#c04848' : 
                      character.career_risk_taken > 0.3 ? '#8a6d3b' : '#5a6c7d';
    
    return `
        <div class="character-card" style="
            background: rgba(15, 15, 13, 0.9);
            border: 2px solid ${cardColor};
            padding: 30px;
            margin: 30px 0;
            max-width: 800px;
        ">
            <div class="character-header" style="
                display: flex;
                align-items: center;
                gap: 20px;
                margin-bottom: 25px;
                padding-bottom: 20px;
                border-bottom: 1px solid rgba(90, 108, 87, 0.3);
            ">
                <div class="character-photo" style="
                    font-size: 4em;
                    line-height: 1;
                ">${character.photo}</div>
                
                <div class="character-info" style="flex: 1;">
                    <div style="
                        font-size: 0.75em;
                        letter-spacing: 0.2em;
                        opacity: 0.5;
                        margin-bottom: 5px;
                        font-family: 'Orbitron', monospace;
                    ">CHARACTER PROFILE — EPISODE ${character.episode}</div>
                    
                    <div style="
                        font-size: 2em;
                        font-weight: 600;
                        letter-spacing: 0.05em;
                        margin-bottom: 8px;
                        color: ${cardColor};
                    ">${character.name}</div>
                    
                    <div style="
                        font-size: 1em;
                        opacity: 0.7;
                        margin-bottom: 5px;
                    ">${character.role}</div>
                    
                    <div style="
                        font-size: 0.9em;
                        opacity: 0.6;
                        font-family: 'Orbitron', monospace;
                    ">${character.app}</div>
                </div>
                
                <div class="identity-badge" style="
                    background: rgba(90, 108, 87, 0.2);
                    border: 1px solid ${cardColor};
                    padding: 10px 15px;
                    font-size: 0.85em;
                    letter-spacing: 0.1em;
                    text-align: center;
                ">
                    <div style="opacity: 0.6; font-size: 0.8em; margin-bottom: 5px;">ENACTED IDENTITY</div>
                    <div style="font-weight: 600;">${character.identity_archetype}</div>
                </div>
            </div>
            
            <div class="character-body" style="
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
                margin-bottom: 25px;
            ">
                <div class="radar-section">
                    <div style="
                        font-size: 0.85em;
                        letter-spacing: 0.15em;
                        opacity: 0.6;
                        margin-bottom: 15px;
                        font-family: 'Orbitron', monospace;
                    ">ETHICAL PROFILE</div>
                    
                    <div class="radar-chart">
                        ${createRadarChartSVG(character.radar_metrics, cardColor)}
                    </div>
                    
                    <div style="
                        margin-top: 15px;
                        font-size: 0.85em;
                        opacity: 0.7;
                        line-height: 1.6;
                    ">
                        11-dimensional assessment of ethical decision-making under constraint.
                        Scale: 1 (low) to 5 (high).
                    </div>
                </div>
                
                <div class="profile-details">
                    <div style="
                        font-size: 0.85em;
                        letter-spacing: 0.15em;
                        opacity: 0.6;
                        margin-bottom: 15px;
                        font-family: 'Orbitron', monospace;
                    ">WHAT THEY DID</div>
                    
                    <div style="
                        background: rgba(0,0,0,0.4);
                        padding: 15px;
                        margin-bottom: 15px;
                        border-left: 3px solid ${cardColor};
                        font-size: 0.95em;
                        line-height: 1.7;
                    ">
                        ${character.what_they_chose}
                    </div>
                    
                    <div class="stats-grid" style="
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                        font-size: 0.85em;
                    ">
                        <div>
                            <div style="opacity: 0.6; margin-bottom: 5px;">Awareness</div>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="flex: 1; background: rgba(0,0,0,0.4); height: 6px; overflow: hidden;">
                                    <div style="background: ${cardColor}; height: 100%; width: ${character.ethical_awareness_score * 100}%;"></div>
                                </div>
                                <span style="font-weight: 600;">${(character.ethical_awareness_score * 100).toFixed(0)}%</span>
                            </div>
                        </div>
                        
                        <div>
                            <div style="opacity: 0.6; margin-bottom: 5px;">Action</div>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="flex: 1; background: rgba(0,0,0,0.4); height: 6px; overflow: hidden;">
                                    <div style="background: ${cardColor}; height: 100%; width: ${character.ethical_action_score * 100}%;"></div>
                                </div>
                                <span style="font-weight: 600;">${(character.ethical_action_score * 100).toFixed(0)}%</span>
                            </div>
                        </div>
                        
                        <div>
                            <div style="opacity: 0.6; margin-bottom: 5px;">Impact</div>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="flex: 1; background: rgba(0,0,0,0.4); height: 6px; overflow: hidden;">
                                    <div style="background: ${cardColor}; height: 100%; width: ${character.impact_score * 100}%;"></div>
                                </div>
                                <span style="font-weight: 600;">${(character.impact_score * 100).toFixed(0)}%</span>
                            </div>
                        </div>
                        
                        <div>
                            <div style="opacity: 0.6; margin-bottom: 5px;">Career Risk</div>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="flex: 1; background: rgba(0,0,0,0.4); height: 6px; overflow: hidden;">
                                    <div style="background: #c04848; height: 100%; width: ${character.career_risk_taken * 100}%;"></div>
                                </div>
                                <span style="font-weight: 600;">${(character.career_risk_taken * 100).toFixed(0)}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="character-analysis" style="
                background: rgba(90, 108, 87, 0.1);
                padding: 20px;
                border-left: 4px solid ${cardColor};
            ">
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    font-size: 0.9em;
                    line-height: 1.7;
                ">
                    <div>
                        <div style="font-weight: 600; color: ${cardColor}; margin-bottom: 8px;">Core Drive</div>
                        <div style="opacity: 0.9;">${character.core_drive}</div>
                    </div>
                    
                    <div>
                        <div style="font-weight: 600; color: #c04848; margin-bottom: 8px;">Vulnerability</div>
                        <div style="opacity: 0.9;">${character.vulnerability}</div>
                    </div>
                </div>
                
                <div style="
                    margin-top: 15px;
                    padding-top: 15px;
                    border-top: 1px solid rgba(90, 108, 87, 0.3);
                ">
                    <div style="font-weight: 600; color: ${cardColor}; margin-bottom: 8px;">Outcome</div>
                    <div style="opacity: 0.9; font-size: 0.95em; line-height: 1.7;">${character.outcome}</div>
                </div>
            </div>
        </div>
    `;
}

// Comparison component showing user vs character
function renderComparison(userChoice, character) {
    const userRisk = userChoice.careerRisk || 0;
    const charRisk = character.career_risk_taken;
    const riskDiff = Math.abs(userRisk - charRisk);
    const alignment = 1 - riskDiff;
    
    let alignmentText = '';
    if (alignment > 0.8) alignmentText = 'Nearly identical choice';
    else if (alignment > 0.6) alignmentText = 'Similar risk tolerance';
    else if (alignment > 0.4) alignmentText = 'Different approaches';
    else alignmentText = 'Opposite strategies';
    
    return `
        <div class="comparison-section" style="
            background: rgba(138, 90, 90, 0.15);
            border: 2px solid rgba(138, 90, 90, 0.5);
            padding: 30px;
            margin: 30px 0;
        ">
            <h3 style="
                font-size: 1.5em;
                margin-bottom: 20px;
                color: rgba(255, 140, 140, 0.9);
            ">Your Choice vs. ${character.name}'s Reality</h3>
            
            <div style="
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
                margin-bottom: 20px;
            ">
                <div>
                    <div style="
                        font-size: 0.85em;
                        letter-spacing: 0.15em;
                        opacity: 0.6;
                        margin-bottom: 10px;
                    ">YOUR CHOICE</div>
                    <div style="
                        background: rgba(0,0,0,0.4);
                        padding: 15px;
                        border-left: 3px solid #6fbc7d;
                    ">
                        <div style="font-weight: 600; margin-bottom: 8px;">${userChoice.identity}</div>
                        <div style="font-size: 0.9em; opacity: 0.8; margin-bottom: 10px;">${userChoice.label}</div>
                        <div style="font-size: 0.85em;">
                            <span style="opacity: 0.6;">Career Risk:</span> 
                            <span style="font-weight: 600;">${(userRisk * 100).toFixed(0)}%</span>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div style="
                        font-size: 0.85em;
                        letter-spacing: 0.15em;
                        opacity: 0.6;
                        margin-bottom: 10px;
                    ">WHAT ${character.name.toUpperCase()} DID</div>
                    <div style="
                        background: rgba(0,0,0,0.4);
                        padding: 15px;
                        border-left: 3px solid #8a6d3b;
                    ">
                        <div style="font-weight: 600; margin-bottom: 8px;">${character.identity_archetype}</div>
                        <div style="font-size: 0.9em; opacity: 0.8; margin-bottom: 10px;">${character.what_they_chose.substring(0, 100)}...</div>
                        <div style="font-size: 0.85em;">
                            <span style="opacity: 0.6;">Career Risk:</span> 
                            <span style="font-weight: 600;">${(charRisk * 100).toFixed(0)}%</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="
                background: rgba(0,0,0,0.4);
                padding: 20px;
                text-align: center;
            ">
                <div style="font-size: 0.85em; opacity: 0.6; margin-bottom: 8px;">ALIGNMENT SCORE</div>
                <div style="font-size: 2em; font-weight: 600; color: rgba(255, 140, 140, 0.9); margin-bottom: 8px;">
                    ${(alignment * 100).toFixed(0)}%
                </div>
                <div style="font-size: 0.95em; opacity: 0.8;">${alignmentText}</div>
            </div>
            
            ${userRisk > charRisk ? `
                <div style="
                    margin-top: 20px;
                    padding: 15px;
                    background: rgba(192, 72, 72, 0.2);
                    border-left: 3px solid #c04848;
                    font-size: 0.9em;
                    line-height: 1.7;
                ">
                    <strong>You chose higher risk.</strong> In the actual scenario, ${character.name} faced ${character.vulnerability.toLowerCase()}. 
                    Your choice may not have been structurally possible.
                </div>
            ` : userRisk < charRisk ? `
                <div style="
                    margin-top: 20px;
                    padding: 15px;
                    background: rgba(90, 108, 87, 0.2);
                    border-left: 3px solid #5a6c57;
                    font-size: 0.9em;
                    line-height: 1.7;
                ">
                    <strong>You chose lower risk.</strong> ${character.name} took more risk and experienced: ${character.outcome.toLowerCase()}
                </div>
            ` : `
                <div style="
                    margin-top: 20px;
                    padding: 15px;
                    background: rgba(138, 109, 59, 0.2);
                    border-left: 3px solid #8a6d3b;
                    font-size: 0.9em;
                    line-height: 1.7;
                ">
                    <strong>Identical risk level.</strong> You aligned with ${character.name}'s actual choice.
                </div>
            `}
        </div>
    `;
}

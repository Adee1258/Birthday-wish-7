/* ==========================================================================
   BIRTHDAY WISH WEBSITE SCRIPT (ENHANCED & LUXURY EDITION)
   Audio Synthesis, Touch Heart Ripples, Resilient Image Fallbacks & Physics
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // --------------------------------------------------------------------------
    // Web Audio API Synth (Realistic Romantic Chime Sounds on Tap)
    // --------------------------------------------------------------------------
    let audioCtx = null;

    function initAudio() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                audioCtx = new AudioContext();
            }
        }
    }

    function playSoftChime(freq = 523.25, type = 'sine') {
        try {
            initAudio();
            if (!audioCtx) return;
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

            gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start();
            osc.stop(audioCtx.currentTime + 0.8);
        } catch (e) {
            // Ignore audio context errors gracefully
        }
    }

    // --------------------------------------------------------------------------
    // Interactive Touch Heart Ripple Effect
    // --------------------------------------------------------------------------
    const rippleContainer = document.getElementById('touchRippleContainer');

    function triggerHeartRipple(e) {
        if (!rippleContainer) return;
        const x = e.clientX || (e.touches && e.touches[0].clientX);
        const y = e.clientY || (e.touches && e.touches[0].clientY);

        if (x === undefined || y === undefined) return;

        const heart = document.createElement('div');
        heart.className = 'touch-heart-ripple';
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

        rippleContainer.appendChild(heart);

        playSoftChime(440 + Math.random() * 200);

        setTimeout(() => {
            heart.remove();
        }, 800);
    }

    window.addEventListener('click', triggerHeartRipple);

    // --------------------------------------------------------------------------
    // 15 Photo Memory Moments Data Array
    // --------------------------------------------------------------------------
    const memoryMoments = [
        {
            tag: "MOMENT ONE",
            title: "A Moment Worth Remembering",
            photo: "assets/ChatGPT Image Sep 15, 2026, 11_14_19 AM.png",
            caption: "Every time you smile, the world feels a little brighter."
        },
        {
            tag: "MOMENT TWO",
            title: "Your Beautiful Smile",
            photo: "assets/ChatGPT Image Sep 15, 2026, 11_14_35 AM.png",
            caption: "Your laughter has a gentle magic that turns ordinary days into sweet memories."
        },
        {
            tag: "MOMENT THREE",
            title: "Precious Conversations",
            photo: "assets/ChatGPT Image Sep 15, 2026, 11_14_50 AM.png",
            caption: "Late night talks and silent understandings that mean more than words."
        },
        {
            tag: "MOMENT FOUR",
            title: "Midnight Laughter",
            photo: "assets/picgd1.jpeg",
            caption: "محترم! 🤍\nجب آپ کے پاس کچھ بھی نہ رہے،\nتب بھی یقین رکھنا، محبت آپ کی رہے گی۔ 🫶🏻✨",
            isUrdu: true
        },
        {
            tag: "MOMENT FIVE",
            title: "Unforgettable Days",
            photo: "assets/picgd2.jpeg",
            caption: "پیدائش سے پہلے میری خوشیاں رکھی گئی جہاں میں 🤍\nیعنی کہ محترم بڑے ہیں مجھ سے ✨",
            isUrdu: true
        },
        {
            tag: "MOMENT SIX",
            title: "Pure Sunshine",
            photo: "assets/WhatsApp Image 2026-09-15 at 10.56.15 AM.jpeg",
            caption: "تیری آنکھوں میں وہ دنیا ملی،\nجہاں سے دل کہیں جانا نہیں چاہتا۔ ❤️",
            objectPosition: "top",
            isUrdu: true
        },
        {
            tag: "MOMENT SEVEN",
            title: "Little Sweet Things",
            photo: "assets/WhatsApp Image 2026-09-15 at 10.56.17 AM.jpeg",
            caption: "تم وہ شعر ہو جسے میرا دل ہر روز لکھتا ہے۔ ✨",
            isUrdu: true
        },
        {
            tag: "MOMENT EIGHT",
            title: "Warmest Hugs",
            photo: "assets/WhatsApp Image 2026-09-15 at 10.56.19 AM.jpeg",
            caption: "اگر محبت کا کوئی چہرہ ہوتا،\nتو ہر خواب میں تیرا ہوتا۔ ❤️",
            objectPosition: "top",
            isUrdu: true
        },
        {
            tag: "MOMENT NINE",
            title: "Unfiltered Joy",
            photo: "assets/WhatsApp Image 2026-09-15 at 10.56.23 AM.jpeg",
            caption: "محبت کو سمجھنے سے پہلے ہی\nمیرے دل نے تمہیں چُن لیا تھا۔ 🫶",
            isUrdu: true
        },
        {
            tag: "MOMENT TEN",
            title: "A Golden Memory",
            photo: "assets/WhatsApp Image 2026-09-15 at 10.56.25 AM.jpeg",
            caption: "ہزاروں چہروں میں بھی\nمیرا دل صرف تمہیں ڈھونڈتا ہے۔ ❤️",
            isUrdu: true
        },
        {
            tag: "MOMENT ELEVEN",
            title: "Serene Moments",
            photo: "assets/WhatsApp Image 2026-09-15 at 10.56.26 AM.jpeg",
            caption: "تم نے میری عام سی زندگی کو شاعری بنا دیا۔ 🌸",
            isUrdu: true
        },
        {
            tag: "MOMENT TWELVE",
            title: "Endless Smiles",
            photo: "assets/WhatsApp Image 2026-09-15 at 10.56.30 AM.jpeg",
            caption: "تمہارا نام میرے دل پر لکھی\nایک خوبصورت غزل سا لگتا ہے۔ ✨",
            isUrdu: true
        },
        {
            tag: "MOMENT THIRTEEN",
            title: "Special Bond",
            photo: "assets/WhatsApp Image 2026-09-15 at 10.56.31 AM.jpeg",
            caption: "تمہاری قربت میں مجھے\nاپنی ہمیشہ کی خوشی مل گئی۔ ❤️",
            objectPosition: "top",
            isUrdu: true
        },
        {
            tag: "MOMENT FOURTEEN",
            title: "Heartwarming Days",
            photo: "assets/WhatsApp Image 2026-09-15 at 10.56.32 AM.jpeg",
            caption: "تم وہ حسین خیال ہو\nجس سے میرا دل کبھی نہیں تھکتا۔ 🫶",
            isUrdu: true
        },
        {
            tag: "MOMENT FIFTEEN",
            title: "Forever Cherished",
            photo: "assets/WhatsApp Image 2026-09-15 at 10.56.33 AM.jpeg",
            caption: "تم سے محبت ایسا خواب ہے\nجس سے میرا دل کبھی جاگنا نہیں چاہتا۔ ❤️",
            isUrdu: true
        },
        {
            tag: "MOMENT SIXTEEN",
            title: "Always & Forever",
            photo: "assets/WhatsApp Image 2026-09-15 at 10.56.34 AM.jpeg",
            caption: "تم میری زندگی کی سب سے خوبصورت یاد ہو،\nجو ہر لمحے میرے دل میں زندہ رہے گی۔ 🤍✨",
            isUrdu: true
        }
    ];

    // --------------------------------------------------------------------------
    function playPopSound() {
        try {
            initAudio();
            if (!audioCtx) return;
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(350, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(750, audioCtx.currentTime + 0.08);

            gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start();
            osc.stop(audioCtx.currentTime + 0.08);
        } catch (e) {
            // Ignore audio context errors gracefully
        }
    }

    function triggerPopSparkles(x, y, color) {
        const numParticles = 10;
        for (let i = 0; i < numParticles; i++) {
            const p = document.createElement('div');
            p.className = 'pop-particle';
            p.style.left = `${x}px`;
            p.style.top = `${y}px`;
            p.style.backgroundColor = color;
            
            const angle = (i / numParticles) * Math.PI * 2;
            const distance = 35 + Math.random() * 30;
            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance;
            
            p.style.setProperty('--dx', `${dx}px`);
            p.style.setProperty('--dy', `${dy}px`);

            document.body.appendChild(p);

            setTimeout(() => {
                p.remove();
            }, 600);
        }
    }

    // --------------------------------------------------------------------------
    // Navigation & Stage Controller State (10 Total Stages)
    // --------------------------------------------------------------------------
    let currentStageIndex = 0; // 0 to 9 (Stages 1 through 10)
    let currentMomentIndex = 0; // 0 to 14
    const totalStages = 10;

    const transitionOverlay = document.getElementById('transitionOverlay');
    const dots = document.querySelectorAll('#progressDots .dot');

    // --------------------------------------------------------------------------
    // Flash Screen Transition & Stage Switcher (Enhanced Smooth Duration)
    // --------------------------------------------------------------------------
    function goToStage(targetIndex) {
        if (targetIndex < 0 || targetIndex >= totalStages) return;

        playSoftChime(600, 'triangle');

        // Smooth Radial Red Glow Flash Wipe
        transitionOverlay.classList.add('flash');

        setTimeout(() => {
            // Hide all stages
            document.querySelectorAll('.stage').forEach(s => s.classList.remove('active'));

            // Show current target stage
            currentStageIndex = targetIndex;
            const stageElement = document.getElementById(`stage${currentStageIndex + 1}`);
            if (stageElement) {
                stageElement.classList.add('active');
            }

            // Update Header Progress Dots
            dots.forEach((dot, idx) => {
                if (idx <= currentStageIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });

            // Specific Stage Triggers (Stage 10 Fireworks)
            if (currentStageIndex === 9) {
                startFireworks();
            } else {
                stopFireworks();
            }

            // Reset cake candles when entering cake stage (stage index 7)
            if (currentStageIndex === 7) {
                initCakeCandles();
            }

            setTimeout(() => {
                transitionOverlay.classList.remove('flash');
            }, 450);

        }, 350);
    }

    // --------------------------------------------------------------------------
    // STAGE 1: Random 5 Small Balloons Pop Logic
    // --------------------------------------------------------------------------
    let poppedBalloonsCount = 0;
    const totalBalloons = 5;
    // Purple, pink, magenta shades matching the TikTok reference video
    const balloonColors = ['#e040fb', '#ab47bc', '#ff4081', '#9c27b0', '#ec407a', '#d81b60'];
    const balloonContainer = document.getElementById('balloonContainer');
    const poppedCountText = document.getElementById('poppedCountText');
    const balloonStatusText = document.getElementById('balloonStatusText');
    const balloonSkipBtn = document.getElementById('balloonSkipBtn');

    function createBalloonSVG(color, idx) {
        return `<svg viewBox="0 0 65 95" width="50" height="80" style="width:50px; height:80px; display:block;">
            <defs>
                <radialGradient id="bgrad-${idx}" cx="35%" cy="30%" r="70%">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
                    <stop offset="30%" stop-color="${color}"/>
                    <stop offset="100%" stop-color="#2a0008"/>
                </radialGradient>
            </defs>
            <!-- Balloon Body -->
            <ellipse cx="32" cy="32" rx="24" ry="28" fill="url(#bgrad-${idx})"/>
            <!-- Glossy Highlight Curve -->
            <path d="M 20 18 A 13 15 0 0 1 32 9" stroke="rgba(255, 255, 255, 0.85)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            <!-- Balloon Knot -->
            <polygon points="32,60 27,67 37,67" fill="${color}"/>
            <!-- Thin Curved String -->
            <path d="M 32,67 Q 24,77 34,85 T 30,95" stroke="rgba(255, 255, 255, 0.65)" stroke-width="1.6" fill="none"/>
        </svg>`;
    }

    function initBalloons() {
        if (!balloonContainer) return;
        balloonContainer.innerHTML = '';
        poppedBalloonsCount = 0;
        if (poppedCountText) poppedCountText.textContent = '0';
        if (balloonStatusText) balloonStatusText.textContent = 'Pop them all 🎈';

        // 5 distinct non-overlapping scattered positions across upper screen area
        const basePositions = [
            { left: 10, top: 6 },
            { left: 68, top: 8 },
            { left: 38, top: 26 },
            { left: 14, top: 48 },
            { left: 64, top: 44 }
        ];

        // Shuffle colors
        const shuffledColors = [...balloonColors].sort(() => 0.5 - Math.random());

        basePositions.forEach((pos, idx) => {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            const color = shuffledColors[idx % shuffledColors.length];
            balloon.innerHTML = createBalloonSVG(color, idx);

            // Enforce inline styles for sizing & positioning
            balloon.style.position = 'absolute';
            balloon.style.width = '50px';
            balloon.style.height = '80px';
            balloon.style.boxSizing = 'content-box';
            balloon.style.cursor = 'pointer';
            balloon.style.zIndex = '50';
            balloon.style.pointerEvents = 'auto';

            // Add slight random jitter (±3%)
            const leftPct = Math.max(5, Math.min(78, pos.left + (Math.random() * 6 - 3)));
            const topPct = Math.max(4, Math.min(55, pos.top + (Math.random() * 6 - 3)));

            balloon.style.left = `${leftPct}%`;
            balloon.style.top = `${topPct}%`;

            // Random float animation timing
            const delay = (Math.random() * 1.5).toFixed(2);
            const duration = (2.4 + Math.random() * 1.4).toFixed(2);
            balloon.style.animationDelay = `${delay}s`;
            balloon.style.animationDuration = `${duration}s`;

            function popThisBalloon(e) {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                if (balloon.dataset.popped) return;
                balloon.dataset.popped = '1';

                balloon.classList.add('popped');
                playPopSound();

                const rect = balloon.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                triggerPopSparkles(centerX, centerY, color);

                poppedBalloonsCount++;
                if (poppedCountText) poppedCountText.textContent = poppedBalloonsCount;

                if (poppedBalloonsCount >= totalBalloons) {
                    if (balloonStatusText) balloonStatusText.textContent = 'All Popped! 🎉';
                    setTimeout(() => {
                        goToStage(1); // Advance to Stage 2 (Heart Intro)
                    }, 400);
                }
            }

            // Multi-event handlers for instant popping on mouse, touch, or pointer!
            ['pointerdown', 'touchstart', 'click'].forEach(evtType => {
                balloon.addEventListener(evtType, popThisBalloon, { passive: false });
            });

            balloonContainer.appendChild(balloon);
        });
    }

    if (balloonSkipBtn) {
        balloonSkipBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (poppedBalloonsCount < totalBalloons) {
                const unpopped = balloonContainer.querySelectorAll('.balloon:not(.popped)');
                unpopped.forEach((b, i) => {
                    setTimeout(() => {
                        b.click();
                    }, i * 100);
                });
            } else {
                goToStage(1);
            }
        });
    }

    // Initialize balloons on load
    initBalloons();

    // --------------------------------------------------------------------------
    // STAGE 2: Heart Tap Trigger
    // --------------------------------------------------------------------------
    const stage2 = document.getElementById('stage2');
    if (stage2) {
        stage2.addEventListener('click', () => {
            goToStage(2);
        });
    }

    // STAGE 3: Hero Screen Tap Trigger
    const stage3 = document.getElementById('stage3');
    if (stage3) {
        stage3.addEventListener('click', () => {
            goToStage(3);
            updateMomentView();
        });
    }

    // --------------------------------------------------------------------------
    // STAGE 4: Memory Moments Slideshow Controller
    // --------------------------------------------------------------------------
    const stage4 = document.getElementById('stage4');
    const momentTag = document.getElementById('momentTag');
    const momentTitle = document.getElementById('momentTitle');
    const memoryPhoto = document.getElementById('memoryPhoto');
    const photoFallbackArt = document.getElementById('photoFallbackArt');
    const momentCaption = document.getElementById('momentCaption');
    const slideDotsContainer = document.getElementById('slideDots');
    const memoryTapText = document.getElementById('memoryTapText');

    if (memoryPhoto) {
        memoryPhoto.onerror = () => {
            memoryPhoto.style.display = 'none';
            if (photoFallbackArt) photoFallbackArt.style.display = 'flex';
        };
    }

    // Build Slide Indicator Dots
    function buildSlideDots() {
        if (!slideDotsContainer) return;
        slideDotsContainer.innerHTML = '';
        memoryMoments.forEach((_, idx) => {
            const sDot = document.createElement('span');
            sDot.className = 's-dot' + (idx === currentMomentIndex ? ' active' : '');
            slideDotsContainer.appendChild(sDot);
        });
    }

    function updateMomentView() {
        transitionOverlay.classList.add('flash');

        if (memoryPhoto) {
            memoryPhoto.classList.remove('fade-in');
            void memoryPhoto.offsetWidth;
            memoryPhoto.classList.add('fade-in');
        }

        setTimeout(() => {
            const moment = memoryMoments[currentMomentIndex];
            if (momentTag) momentTag.textContent = moment.tag;
            if (momentTitle) momentTitle.textContent = moment.title;
            
            if (memoryPhoto) {
                memoryPhoto.style.display = 'block';
                if (photoFallbackArt) photoFallbackArt.style.display = 'none';
                memoryPhoto.src = moment.photo;
                memoryPhoto.style.objectPosition = moment.objectPosition || 'center';
            }
            
            if (momentCaption) {
                momentCaption.textContent = moment.caption;
                if (moment.isUrdu) {
                    momentCaption.classList.add('urdu');
                } else {
                    momentCaption.classList.remove('urdu');
                }
            }
            buildSlideDots();

            if (memoryTapText) {
                if (currentMomentIndex === memoryMoments.length - 1) {
                    memoryTapText.textContent = "TAP TO CONTINUE";
                } else {
                    memoryTapText.textContent = "TAP FOR NEXT MOMENT";
                }
            }
        }, 250);

        setTimeout(() => {
            transitionOverlay.classList.remove('flash');
        }, 550);
    }

    if (stage4) {
        stage4.addEventListener('click', () => {
            if (currentMomentIndex < memoryMoments.length - 1) {
                currentMomentIndex++;
                updateMomentView();
            } else {
                goToStage(4); // Advance to Stage 5 (Cards)
            }
        });
    }

    // --------------------------------------------------------------------------
    // STAGE 5: Words From My Heart 2x2 Grid Cards Logic
    // --------------------------------------------------------------------------
    const revealCards = document.querySelectorAll('.reveal-card');
    const cardsContinueBtn = document.getElementById('cardsContinueBtn');

    revealCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.toggle('flipped');
            playSoftChime(700, 'sine');
        });
    });

    if (cardsContinueBtn) {
        cardsContinueBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goToStage(5); // Advance to Stage 6 (Message)
        });
    }

    const stage5 = document.getElementById('stage5');
    if (stage5) {
        stage5.addEventListener('click', () => {
            goToStage(5);
        });
    }

    // --------------------------------------------------------------------------
    // STAGE 6: Dedicated Message Showcase Stage Logic
    // --------------------------------------------------------------------------
    const stage6 = document.getElementById('stage6');
    const stage5ContinueBtn = document.getElementById('stage5ContinueBtn');
    
    if (stage5ContinueBtn) {
        stage5ContinueBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goToStage(6); // Advance to Stage 7 (Envelope)
        });
    }

    if (stage6) {
        stage6.addEventListener('click', () => {
            goToStage(6);
        });
    }

    // --------------------------------------------------------------------------
    // STAGE 7: Envelope & Cake Unseal Logic
    // --------------------------------------------------------------------------
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const envelope = document.getElementById('envelope');
    const envelopeHint = document.getElementById('envelopeHint');
    const envelopeContinueBtn = document.getElementById('envelopeContinueBtn');

    if (envelopeWrapper) {
        envelopeWrapper.addEventListener('click', (e) => {
            e.stopPropagation();
            if (envelope && !envelope.classList.contains('open')) {
                envelope.classList.add('open');
                if (envelopeHint) envelopeHint.textContent = "A sweet birthday message for you!";
                if (envelopeContinueBtn) envelopeContinueBtn.style.display = 'inline-flex';
                playSoftChime(880, 'triangle');
            }
        });
    }

    if (envelopeContinueBtn) {
        envelopeContinueBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goToStage(7); // Advance to Stage 8 (Cake)
        });
    }

    const stage7 = document.getElementById('stage7');
    if (stage7) {
        stage7.addEventListener('click', () => {
            if (envelope && envelope.classList.contains('open')) {
                goToStage(7);
            }
        });
    }

    // --------------------------------------------------------------------------
    // STAGE 8: Interactive Cake — Blow the Candles!
    // --------------------------------------------------------------------------
    const candlesRow = document.getElementById('candlesRow');
    const cakeHintText = document.getElementById('cakeHintText');
    const candlesLeftText = document.getElementById('candlesLeftText');
    const cakeTotalCandles = 5;
    let blownCount = 0;

    function playBlowSound() {
        try {
            initAudio();
            if (!audioCtx) return;
            if (audioCtx.state === 'suspended') audioCtx.resume();
            // Soft "whoosh" sound
            const bufferSize = audioCtx.sampleRate * 0.18;
            const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
            }
            const source = audioCtx.createBufferSource();
            source.buffer = buffer;
            const filter = audioCtx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.value = 1200;
            filter.Q.value = 0.5;
            const gain = audioCtx.createGain();
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.18);
            source.connect(filter);
            filter.connect(gain);
            gain.connect(audioCtx.destination);
            source.start();
        } catch (e) { /* ignore */ }
    }

    function initCakeCandles() {
        blownCount = 0;
        if (candlesLeftText) candlesLeftText.textContent = `${cakeTotalCandles} candles left ✨`;
        if (cakeHintText) {
            cakeHintText.textContent = 'Tap each candle to blow it out 🌬️';
            cakeHintText.style.opacity = '1';
        }
        // Reset all candles to unblown state
        if (candlesRow) {
            candlesRow.querySelectorAll('.candle').forEach(c => {
                c.classList.remove('blown');
                c.dataset.blown = '';
            });
            const cakeWrapper = document.querySelector('.css-cake-wrapper');
            if (cakeWrapper) cakeWrapper.classList.remove('all-blown');
        }
    }

    if (candlesRow) {
        candlesRow.querySelectorAll('.candle').forEach(candle => {
            ['pointerdown', 'touchstart', 'click'].forEach(evtType => {
                candle.addEventListener(evtType, (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (candle.dataset.blown) return;
                    candle.dataset.blown = '1';
                    candle.classList.add('blown');
                    playBlowSound();
                    blownCount++;

                    const remaining = cakeTotalCandles - blownCount;
                    if (candlesLeftText) {
                        if (remaining > 0) {
                            candlesLeftText.textContent = `${remaining} candle${remaining > 1 ? 's' : ''} left ✨`;
                        } else {
                            candlesLeftText.textContent = 'Wish granted! 🎉';
                        }
                    }

                    if (blownCount >= cakeTotalCandles) {
                        // All candles blown!
                        const cakeWrapper = document.querySelector('.css-cake-wrapper');
                        if (cakeWrapper) cakeWrapper.classList.add('all-blown');
                        if (cakeHintText) cakeHintText.textContent = 'Your wish is on its way! 💫';
                        playSoftChime(880, 'sine');
                        setTimeout(() => playSoftChime(1046, 'sine'), 200);
                        setTimeout(() => playSoftChime(1318, 'sine'), 400);
                        // Advance after a short celebration
                        setTimeout(() => {
                            goToStage(8); // Go to Stage 9 (Signature)
                        }, 1400);
                    }
                }, { passive: false });
            });
        });
    }

    // --------------------------------------------------------------------------
    // STAGE 9: Rotating Heart & Signature Tap
    // --------------------------------------------------------------------------
    const stage9 = document.getElementById('stage9');
    if (stage9) {
        stage9.addEventListener('click', () => {
            goToStage(9); // Advance to Stage 10 (Fireworks)
        });
    }

    // --------------------------------------------------------------------------
    // STAGE 10: Replay Reset Trigger
    // --------------------------------------------------------------------------
    const replayBtn = document.getElementById('replayBtn');
    if (replayBtn) {
        replayBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Reset envelope
            if (envelope) envelope.classList.remove('open');
            if (envelopeHint) envelopeHint.textContent = "Tap the envelope to unseal";
            if (envelopeContinueBtn) envelopeContinueBtn.style.display = 'none';

            // Reset flipped cards
            revealCards.forEach(c => c.classList.remove('flipped'));

            // Reset moment index
            currentMomentIndex = 0;

            // Reset cake candles
            initCakeCandles();

            // Re-init 5 random balloons
            initBalloons();

            // Jump back to Stage 1 (Balloons)
            goToStage(0);
        });
    }


    // ==========================================================================
    // CANVAS 1: Continuous Floating Pink Rose Petals & Sparkles System
    // ==========================================================================
    const petalsCanvas = document.getElementById('petalsCanvas');
    const ctxPetals = petalsCanvas.getContext('2d');

    function resizePetalsCanvas() {
        petalsCanvas.width = window.innerWidth;
        petalsCanvas.height = window.innerHeight;
    }
    resizePetalsCanvas();
    window.addEventListener('resize', resizePetalsCanvas);

    const petals = [];
    const numPetals = 40;
    const petalColors = ['#ff758f', '#ff4d6d', '#ffb3c1', '#ff8fa3', '#c9184a', '#ffd1dc'];

    class Petal {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * petalsCanvas.width;
            this.y = Math.random() * -petalsCanvas.height;
            this.size = Math.random() * 8 + 5;
            this.speedY = Math.random() * 1.3 + 0.7;
            this.speedX = Math.random() * 0.8 - 0.4;
            this.angle = Math.random() * 360;
            this.spin = Math.random() * 2 - 1;
            this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
            this.opacity = Math.random() * 0.5 + 0.4;
            this.isSparkle = Math.random() < 0.25;
        }

        update() {
            this.y += this.speedY;
            this.x += Math.sin(this.y * 0.01) + this.speedX;
            this.angle += this.spin;

            if (this.y > petalsCanvas.height + 20) {
                this.reset();
            }
        }

        draw() {
            ctxPetals.save();
            ctxPetals.translate(this.x, this.y);
            ctxPetals.rotate((this.angle * Math.PI) / 180);
            ctxPetals.globalAlpha = this.opacity;

            if (this.isSparkle) {
                ctxPetals.fillStyle = '#ffdf7e';
                ctxPetals.beginPath();
                ctxPetals.arc(0, 0, this.size / 3, 0, Math.PI * 2);
                ctxPetals.fill();
            } else {
                ctxPetals.fillStyle = this.color;
                ctxPetals.beginPath();
                ctxPetals.ellipse(0, 0, this.size, this.size / 2, 0, 0, 2 * Math.PI);
                ctxPetals.fill();
            }

            ctxPetals.restore();
        }
    }

    for (let i = 0; i < numPetals; i++) {
        petals.push(new Petal());
    }

    function animatePetals() {
        ctxPetals.clearRect(0, 0, petalsCanvas.width, petalsCanvas.height);
        petals.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animatePetals);
    }
    animatePetals();


    // ==========================================================================
    // CANVAS 2: Fireworks & Sparklers Physics Engine (Stage 8)
    // ==========================================================================
    const fireworksCanvas = document.getElementById('fireworksCanvas');
    const ctxFireworks = fireworksCanvas.getContext('2d');
    let fireworksAnimId = null;

    function resizeFireworksCanvas() {
        fireworksCanvas.width = window.innerWidth;
        fireworksCanvas.height = window.innerHeight;
    }
    resizeFireworksCanvas();
    window.addEventListener('resize', resizeFireworksCanvas);

    let particles = [];

    function createExplosion(x, y) {
        const count = 75;
        const colors = ['#ff4d6d', '#ff758f', '#ffb3c1', '#ffffff', '#ffb703', '#fb8500', '#ffd1dc'];
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 5.5 + 1.5;
            particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                alpha: 1,
                decay: Math.random() * 0.02 + 0.01,
                color: colors[Math.floor(Math.random() * colors.length)],
                radius: Math.random() * 3 + 1.5
            });
        }
    }

    function animateFireworks() {
        ctxFireworks.fillStyle = 'rgba(20, 1, 4, 0.2)';
        ctxFireworks.fillRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

        if (Math.random() < 0.09) {
            createExplosion(
                Math.random() * fireworksCanvas.width,
                Math.random() * (fireworksCanvas.height * 0.6) + 50
            );
        }

        particles.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.05;
            p.alpha -= p.decay;

            if (p.alpha <= 0) {
                particles.splice(index, 1);
            } else {
                ctxFireworks.save();
                ctxFireworks.globalAlpha = p.alpha;
                ctxFireworks.fillStyle = p.color;
                ctxFireworks.beginPath();
                ctxFireworks.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctxFireworks.fill();
                ctxFireworks.restore();
            }
        });

        fireworksAnimId = requestAnimationFrame(animateFireworks);
    }

    function startFireworks() {
        if (!fireworksAnimId) {
            animateFireworks();
        }
    }

    function stopFireworks() {
        if (fireworksAnimId) {
            cancelAnimationFrame(fireworksAnimId);
            fireworksAnimId = null;
            ctxFireworks.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
            particles = [];
        }
    }
});

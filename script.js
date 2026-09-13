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
    // High-Res Image & Fallback Handling for Cake Image
    // --------------------------------------------------------------------------
    const cakeImg = document.getElementById('cakeImg');
    const vectorCakeArt = document.getElementById('vectorCakeArt');

    if (cakeImg) {
        cakeImg.onerror = () => {
            cakeImg.style.display = 'none';
            if (vectorCakeArt) vectorCakeArt.style.display = 'flex';
        };
        setTimeout(() => {
            if (!cakeImg.complete || cakeImg.naturalWidth === 0) {
                cakeImg.style.display = 'none';
                if (vectorCakeArt) vectorCakeArt.style.display = 'flex';
            }
        }, 2000);
    }

    // --------------------------------------------------------------------------
    // 15 Photo Memory Moments Data Array
    // --------------------------------------------------------------------------
    const memoryMoments = [
        {
            tag: "MOMENT ONE",
            title: "A Moment Worth Remembering",
            photo: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
            caption: "Every time you smile, the world feels a little brighter."
        },
        {
            tag: "MOMENT TWO",
            title: "Your Beautiful Smile",
            photo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
            caption: "Your laughter has a gentle magic that turns ordinary days into sweet memories."
        },
        {
            tag: "MOMENT THREE",
            title: "Precious Conversations",
            photo: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop",
            caption: "Late night talks and silent understandings that mean more than words."
        },
        {
            tag: "MOMENT FOUR",
            title: "Midnight Laughter",
            photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
            caption: "Finding joy in the simplest little things whenever you are near."
        },
        {
            tag: "MOMENT FIVE",
            title: "Unforgettable Days",
            photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
            caption: "Some days become permanent treasures in the heart because of you."
        },
        {
            tag: "MOMENT SIX",
            title: "Pure Sunshine",
            photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
            caption: "You bring a warmth that lights up even the darkest skies."
        },
        {
            tag: "MOMENT SEVEN",
            title: "Little Sweet Things",
            photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
            caption: "It is your kindness and gentle soul that makes you so deeply special."
        },
        {
            tag: "MOMENT EIGHT",
            title: "Warmest Hugs",
            photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
            caption: "A comfort that feels like coming home every single time."
        },
        {
            tag: "MOMENT NINE",
            title: "Unfiltered Joy",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
            caption: "Seeing you happy is one of the greatest pleasures of life."
        },
        {
            tag: "MOMENT TEN",
            title: "A Golden Memory",
            photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=800&auto=format&fit=crop",
            caption: "Time spent with you always feels like a golden sunset."
        },
        {
            tag: "MOMENT ELEVEN",
            title: "Serene Moments",
            photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop",
            caption: "Quiet peace and happiness that flows naturally when we talk."
        },
        {
            tag: "MOMENT TWELVE",
            title: "Endless Smiles",
            photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=800&auto=format&fit=crop",
            caption: "May your life forever be filled with reasons to keep smiling."
        },
        {
            tag: "MOMENT THIRTEEN",
            title: "Special Bond",
            photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
            caption: "A connection built on true respect, warmth, and care."
        },
        {
            tag: "MOMENT FOURTEEN",
            title: "Heartwarming Days",
            photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
            caption: "Thank you for being the amazing person that you are."
        },
        {
            tag: "MOMENT FIFTEEN",
            title: "Forever Cherished",
            photo: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=800&auto=format&fit=crop",
            caption: "Wishing you a birthday as wonderful and unforgettable as you are."
        }
    ];

    // --------------------------------------------------------------------------
    // Navigation & Stage Controller State
    // --------------------------------------------------------------------------
    let currentStageIndex = 0; // 0 to 7 (Stages 1 through 8)
    let currentMomentIndex = 0; // 0 to 14
    const totalStages = 8;

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

            // Specific Stage Triggers
            if (currentStageIndex === 7) {
                startFireworks();
            } else {
                stopFireworks();
            }

            setTimeout(() => {
                transitionOverlay.classList.remove('flash');
            }, 450);

        }, 350);
    }

    // --------------------------------------------------------------------------
    // STAGE 1: Heart Tap Trigger
    // --------------------------------------------------------------------------
    const stage1 = document.getElementById('stage1');
    stage1.addEventListener('click', () => {
        goToStage(1);
    });

    // STAGE 2: Hero Screen Tap Trigger
    const stage2 = document.getElementById('stage2');
    stage2.addEventListener('click', () => {
        goToStage(2);
        updateMomentView();
    });

    // --------------------------------------------------------------------------
    // STAGE 3: Memory Moments Slideshow Controller (With Smooth Long Flash Glow!)
    // --------------------------------------------------------------------------
    const stage3 = document.getElementById('stage3');
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
        slideDotsContainer.innerHTML = '';
        memoryMoments.forEach((_, idx) => {
            const sDot = document.createElement('span');
            sDot.className = 's-dot' + (idx === currentMomentIndex ? ' active' : '');
            slideDotsContainer.appendChild(sDot);
        });
    }

    function updateMomentView() {
        // Trigger Smooth Radial Red Glow Flash Wipe Effect on Photo Change!
        transitionOverlay.classList.add('flash');

        // Smooth photo fade & scale animation
        if (memoryPhoto) {
            memoryPhoto.classList.remove('fade-in');
            void memoryPhoto.offsetWidth; // Trigger CSS reflow
            memoryPhoto.classList.add('fade-in');
        }

        setTimeout(() => {
            const moment = memoryMoments[currentMomentIndex];
            momentTag.textContent = moment.tag;
            momentTitle.textContent = moment.title;
            
            if (memoryPhoto) {
                memoryPhoto.style.display = 'block';
                if (photoFallbackArt) photoFallbackArt.style.display = 'none';
                memoryPhoto.src = moment.photo;
            }
            
            momentCaption.textContent = moment.caption;
            buildSlideDots();

            if (currentMomentIndex === memoryMoments.length - 1) {
                memoryTapText.textContent = "TAP TO CONTINUE";
            } else {
                memoryTapText.textContent = "TAP FOR NEXT MOMENT";
            }
        }, 250);

        setTimeout(() => {
            transitionOverlay.classList.remove('flash');
        }, 550);
    }

    stage3.addEventListener('click', () => {
        if (currentMomentIndex < memoryMoments.length - 1) {
            currentMomentIndex++;
            updateMomentView();
        } else {
            goToStage(3); // Advance to Stage 4 (Cards)
        }
    });

    // --------------------------------------------------------------------------
    // STAGE 4: Words From My Heart 2x2 Grid Cards Logic
    // --------------------------------------------------------------------------
    const revealCards = document.querySelectorAll('.reveal-card');
    const cardsContinueBtn = document.getElementById('cardsContinueBtn');

    revealCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation(); // Don't trigger stage click
            card.classList.toggle('flipped');
            playSoftChime(700, 'sine');
        });
    });

    cardsContinueBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToStage(4); // Advance to Stage 5 (Highlight Card)
    });

    const stage4 = document.getElementById('stage4');
    stage4.addEventListener('click', () => {
        goToStage(4);
    });

    // --------------------------------------------------------------------------
    // STAGE 5: Highlight Card Stage Logic
    // --------------------------------------------------------------------------
    const stage5 = document.getElementById('stage5');
    const stage5ContinueBtn = document.getElementById('stage5ContinueBtn');
    
    stage5ContinueBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToStage(5); // Advance to Stage 6 (Envelope)
    });

    stage5.addEventListener('click', () => {
        goToStage(5);
    });

    // --------------------------------------------------------------------------
    // STAGE 6: Envelope & Cake Unseal Logic
    // --------------------------------------------------------------------------
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const envelope = document.getElementById('envelope');
    const envelopeHint = document.getElementById('envelopeHint');
    const envelopeContinueBtn = document.getElementById('envelopeContinueBtn');

    envelopeWrapper.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!envelope.classList.contains('open')) {
            envelope.classList.add('open');
            envelopeHint.textContent = "A sweet birthday message for you!";
            envelopeContinueBtn.style.display = 'inline-flex';
            playSoftChime(880, 'triangle');
        }
    });

    envelopeContinueBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToStage(6); // Advance to Stage 7 (Spinning Heart)
    });

    const stage6 = document.getElementById('stage6');
    stage6.addEventListener('click', () => {
        if (envelope.classList.contains('open')) {
            goToStage(6);
        }
    });

    // --------------------------------------------------------------------------
    // STAGE 7: Rotating Heart & Personal Signature Card Tap
    // --------------------------------------------------------------------------
    const stage7 = document.getElementById('stage7');
    stage7.addEventListener('click', () => {
        goToStage(7); // Advance to Stage 8 (Fireworks)
    });

    // --------------------------------------------------------------------------
    // STAGE 8: Replay Reset Trigger
    // --------------------------------------------------------------------------
    const replayBtn = document.getElementById('replayBtn');
    replayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        // Reset envelope
        envelope.classList.remove('open');
        envelopeHint.textContent = "Tap the envelope to unseal";
        envelopeContinueBtn.style.display = 'none';

        // Reset flipped cards
        revealCards.forEach(c => c.classList.remove('flipped'));

        // Reset moment index
        currentMomentIndex = 0;

        // Jump back to Stage 1
        goToStage(0);
    });


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

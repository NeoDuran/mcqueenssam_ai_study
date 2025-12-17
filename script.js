/**
 * 맥퀸쌤 AI 챌린지 랜딩페이지 - JavaScript
 * Hero 섹션 인터랙션 및 애니메이션
 */

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 배포용 설정: 항상 잠긴 상태로 시작
    const FORCE_LOCKED_STATE = true; // 배포 시 true로 설정
    
    // 디버깅: localStorage 상태 확인
    console.log('=== localStorage 상태 확인 ===');
    console.log('강제 잠금 모드:', FORCE_LOCKED_STATE);
    console.log('기본과정 잠금 해제 상태:', localStorage.getItem('basicCourseUnlocked'));
    console.log('심화과정 잠금 해제 상태:', localStorage.getItem('advancedCourseUnlocked'));
    
    // 배포용: localStorage 무시하고 항상 잠긴 상태로 시작
    if (FORCE_LOCKED_STATE) {
        localStorage.removeItem('basicCourseUnlocked');
        localStorage.removeItem('advancedCourseUnlocked');
        console.log('배포용 설정: 모든 인증 상태 초기화됨');
    }
    
    // 개발자 도구에서 localStorage 초기화 함수 제공
    window.clearAllAuth = function() {
        localStorage.removeItem('basicCourseUnlocked');
        localStorage.removeItem('basicCourseCode');
        localStorage.removeItem('advancedCourseUnlocked');
        localStorage.removeItem('advancedCourseCode');
        console.log('모든 인증 정보가 초기화되었습니다. 페이지를 새로고침하세요.');
        location.reload();
    };
    
    // 배포용 설정 확인 함수
    window.checkAuthState = function() {
        console.log('=== 현재 인증 상태 ===');
        console.log('강제 잠금 모드:', FORCE_LOCKED_STATE);
        console.log('기본과정:', localStorage.getItem('basicCourseUnlocked'));
        console.log('심화과정:', localStorage.getItem('advancedCourseUnlocked'));
    };
    
    console.log('디버깅 함수 등록: window.clearAllAuth(), window.checkAuthState()');
    
    // 스크롤 가이드 클릭 이벤트
    initScrollGuide();
    
    // 부드러운 스크롤 애니메이션
    initSmoothScroll();
    
    // CTA 버튼 클릭 추적 (선택사항)
    initCTATracking();
    
    // 키보드 접근성 개선
    initKeyboardAccessibility();
    
    // 배경 비주얼 요소 인터랙션
    initBackgroundVisuals();
    
    // Section 2 기능 초기화
    initVideoSection();
    initBlogCards();
    initSection2ScrollAnimations();
    
    // Section 3 기능 초기화
    initSection3();
    
    // Section 4 기능 초기화
    initSection4();
    
    // Section 5 기능 초기화
    initSection5();
    
    // Section 6 기능 초기화
    initSection6();
    
    // Section 7 기능 초기화
    initSection7();
    
    // Section 8 기능 초기화
    initSection8();
    
    // Section 9 기능 초기화
    initSection9();
    
});

/**
 * 스크롤 가이드 초기화
 * 클릭 시 다음 섹션으로 부드럽게 스크롤
 */
function initScrollGuide() {
    const scrollGuide = document.querySelector('.scroll-guide');
    const section2 = document.querySelector('.video-blog-section');
    
    if (scrollGuide && section2) {
        scrollGuide.addEventListener('click', function() {
            // Section 2로 부드럽게 스크롤
            section2.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
        
        // 호버 효과는 CSS에서 처리
    }
}

/**
 * 부드러운 스크롤 초기화
 * 앵커 링크 클릭 시 부드러운 스크롤 적용
 */
function initSmoothScroll() {
    // 모든 앵커 링크에 부드러운 스크롤 적용
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * CTA 버튼 클릭 추적 초기화
 * 분석을 위한 이벤트 추적 (선택사항)
 */
function initCTATracking() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            // Google Analytics나 다른 분석 도구 이벤트 추적
            // 예: gtag('event', 'click', { event_category: 'CTA', event_label: 'Hero CTA' });
            
            // 콘솔에 로그 (개발용)
            console.log('CTA 버튼 클릭: 카카오톡 오픈채팅 이동');
            
            // 클릭 효과 애니메이션
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }
}

/**
 * 키보드 접근성 개선
 * 키보드로 탐색할 때의 사용성 향상
 */
function initKeyboardAccessibility() {
    // 포커스 가능한 모든 요소
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        // 포커스 시 스타일 개선
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid rgba(255, 255, 255, 0.8)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // Enter 키로 스크롤 가이드 활성화
    const scrollGuide = document.querySelector('.scroll-guide');
    if (scrollGuide) {
        scrollGuide.setAttribute('tabindex', '0');
        scrollGuide.setAttribute('role', 'button');
        scrollGuide.setAttribute('aria-label', '다음 섹션으로 스크롤');
        
        scrollGuide.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
}

/**
 * 스크롤 기반 애니메이션 (추후 섹션 추가 시 사용)
 * Intersection Observer를 사용한 스크롤 애니메이션
 */
function initScrollAnimations() {
    // Intersection Observer 지원 확인
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                } else {
                    entry.target.classList.remove('animate-in');
                }
            });
        }, observerOptions);
        
        // 애니메이션 대상 요소들 관찰
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }
}

/**
 * 반응형 폰트 크기 조정 (선택사항)
 * 뷰포트 크기에 따른 동적 폰트 크기 조정
 */
function adjustFontSizes() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const mainTitle = document.querySelector('.main-title');
    
    if (mainTitle && vw > 1400) {
        // 대형 화면에서 폰트 크기 추가 조정
        mainTitle.style.fontSize = 'clamp(3rem, 5vw, 5rem)';
    }
}

// 윈도우 리사이즈 이벤트
window.addEventListener('resize', function() {
    adjustFontSizes();
});

/**
 * 페이지 로드 완료 후 추가 초기화
 */
window.addEventListener('load', function() {
    // 모든 리소스 로드 완료 후 실행할 코드
    adjustFontSizes();
    
    // 로딩 애니메이션이 있다면 여기서 제거
    document.body.classList.add('loaded');
});

/**
 * 에러 핸들링
 */
window.addEventListener('error', function(e) {
    console.error('JavaScript 오류:', e.error);
});

/**
 * 배경 비주얼 요소 인터랙션 초기화
 * AI 아이콘들에 마우스 호버 효과 추가
 */
function initBackgroundVisuals() {
    const aiIcons = document.querySelectorAll('.ai-icon');
    
    aiIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.opacity = '0.3';
            this.style.transition = 'all 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '0.15';
        });
    });
    
    // 성장 곡선에 호버 효과
    const growthCurve = document.querySelector('.growth-curve');
    if (growthCurve) {
        growthCurve.addEventListener('mouseenter', function() {
            this.style.opacity = '0.2';
            this.style.transition = 'opacity 0.3s ease';
        });
        
        growthCurve.addEventListener('mouseleave', function() {
            this.style.opacity = '0.1';
        });
    }
}

/**
 * Section 2: 영상 섹션 초기화
 * 유튜브 영상 로딩 및 인터랙션 관리
 */
function initVideoSection() {
    const videoContainer = document.querySelector('.video-container');
    const iframe = document.querySelector('.video-container iframe');
    
    if (videoContainer && iframe) {
        // 영상 로딩 상태 관리
        iframe.addEventListener('load', function() {
            console.log('유튜브 영상 로딩 완료');
            videoContainer.classList.add('loaded');
        });
        
        // 영상 컨테이너 클릭 시 포커스
        videoContainer.addEventListener('click', function() {
            this.classList.add('focused');
        });
        
        // 영상 영역 벗어날 때 포커스 해제
        document.addEventListener('click', function(e) {
            if (!videoContainer.contains(e.target)) {
                videoContainer.classList.remove('focused');
            }
        });
    }
}

/**
 * Section 2: 블로그 카드 초기화
 * 카드 애니메이션 및 클릭 추적
 */
function initBlogCards() {
    const blogCards = document.querySelectorAll('.blog-card');
    const cardButtons = document.querySelectorAll('.card-button');
    
    // 카드 호버 효과 개선
    blogCards.forEach((card, index) => {
        // 카드 진입 애니메이션
        setTimeout(() => {
            card.classList.add('animate-in');
        }, index * 200);
        
        // 카드 호버 시 아이콘 애니메이션 강화
        const cardIcon = card.querySelector('.card-icon');
        
        card.addEventListener('mouseenter', function() {
            if (cardIcon) {
                cardIcon.style.transform = 'scale(1.2) rotate(10deg)';
                cardIcon.style.transition = 'all 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (cardIcon) {
                cardIcon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // 블로그 링크 클릭 추적
    cardButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            const cardTitle = this.closest('.blog-card').querySelector('.card-title').textContent;
            
            // 분석 이벤트 추적 (선택사항)
            console.log(`블로그 카드 클릭: ${cardTitle}`);
            
            // 클릭 효과 애니메이션
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // 로딩 상태 표시 (선택사항)
            const originalText = this.textContent;
            this.textContent = '이동 중...';
            
            setTimeout(() => {
                this.textContent = originalText;
            }, 1000);
        });
    });
}

/**
 * 스크롤 기반 애니메이션 개선
 * Section 2 요소들에 대한 스크롤 애니메이션
 */
function initSection2ScrollAnimations() {
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // 블로그 카드들 순차 애니메이션
                    if (entry.target.classList.contains('blog-cards')) {
                        const cards = entry.target.querySelectorAll('.blog-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('slide-in');
                            }, index * 150);
                        });
                    }
                }
            });
        }, observerOptions);
        
        // 관찰할 요소들
        const section2Elements = document.querySelectorAll(
            '.video-area, .blog-area, .blog-cards'
        );
        
        section2Elements.forEach(element => {
            observer.observe(element);
        });
    }
}


/**
 * Section 3: 왜 맥퀸쌤 챌린지가 특별한가요? 초기화
 * 스크롤 애니메이션 및 카드 인터랙션
 */
function initSection3() {
    const featureCards = document.querySelectorAll('.feature-card');
    const ctaSection = document.querySelector('.cta-section');
    const ctaButton = document.querySelector('.why-mcqueen .cta-button');
    
    // 스크립트 오류 발생 여부와 관계없이 카드가 항상 보이도록 처리
    featureCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transition = 'all 0.6s ease';
    });
    
    // Intersection Observer로 스크롤 시 카드 순차 등장
    if ('IntersectionObserver' in window && featureCards.length > 0) {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // 카드별로 다른 지연시간 적용
                    const cardIndex = Array.from(featureCards).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, cardIndex * 150); // 150ms씩 지연
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // 관찰 시작
        featureCards.forEach(card => {
            cardObserver.observe(card);
        });
    }
    
    // CTA 섹션 - 항상 보이도록 처리
    if (ctaSection) {
        ctaSection.style.opacity = '1';
        ctaSection.style.transform = 'translateY(0) scale(1)';
        ctaSection.style.transition = 'all 0.8s ease';
    }
    
    // CTA 섹션 애니메이션
    if ('IntersectionObserver' in window && ctaSection) {
        const ctaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, 600); // 카드들 이후에 등장
                }
            });
        }, { 
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        });
        
        ctaObserver.observe(ctaSection);
    }
    
    // 카드 호버 효과 개선
    featureCards.forEach((card, index) => {
        const icon = card.querySelector('.feature-icon');
        
        card.addEventListener('mouseenter', function() {
            // 아이콘 추가 애니메이션
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.filter = 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))';
            }
            
            // 카드 그림자 강화
            this.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.filter = 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))';
            }
            
            this.style.boxShadow = '0 4px 20px rgba(102, 126, 234, 0.2)';
        });
    });
    
    // CTA 버튼 클릭 추적
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            console.log('Section 3 CTA 버튼 클릭: 카카오톡 오픈채팅 이동');
            
            // 클릭 효과 애니메이션
            this.style.transform = 'translateY(-3px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            }, 100);
            
            // 로딩 상태 표시 (선택사항)
            const originalText = this.textContent;
            this.textContent = '이동 중... 🚀';
            
            setTimeout(() => {
                this.textContent = originalText;
            }, 1500);
        });
        
        // CTA 버튼 주기적 펄스 효과 (관심 유도)
        setInterval(() => {
            if (ctaButton.matches(':hover')) return; // 호버 중이면 스킵
            
            ctaButton.style.transform = 'translateY(-3px) scale(1.08)';
            setTimeout(() => {
                ctaButton.style.transform = 'translateY(-3px) scale(1.05)';
            }, 200);
        }, 5000); // 5초마다 펄스
    }
}

/**
 * 전체 페이지 스크롤 진행률 표시 (선택사항)
 */
function initScrollProgress() {
    // 스크롤 진행률 바 생성
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

/**
 * Section 4: 맥퀸쌤의 진심 초기화
 * 기부 투명성 모달 및 스크롤 애니메이션
 */
function initSection4() {
    const storySection = document.querySelector('.mcqueen-story');
    const transparencyBtn = document.getElementById('transparency-btn');
    const donationButtons = document.querySelectorAll('.donation-btn');
    
    // 기부 투명성 버튼 클릭 이벤트
    if (transparencyBtn) {
        transparencyBtn.addEventListener('click', function() {
            // 더 나은 모달 UI 구현 (간단한 알림으로 시작)
            showTransparencyModal();
        });
    }
    
    // 스크롤 애니메이션 (Intersection Observer)
    // 스크립트 오류 발생 여부와 관계없이 섹션이 항상 보이도록 처리
    if (storySection) {
        storySection.classList.add('visible');
    }
    
    if ('IntersectionObserver' in window && storySection) {
        const storyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });
        
        storyObserver.observe(storySection);
    }
    
    // 기부 버튼 클릭 추적
    donationButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            const buttonType = this.classList.contains('primary') ? '한국심장재단 후원' : '기부 투명성';
            console.log(`Section 4 기부 버튼 클릭: ${buttonType}`);
            
            // 클릭 효과 애니메이션
            this.style.transform = 'translateY(-3px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = this.classList.contains('primary') ? 
                    'translateY(-3px) scale(1)' : 'translateY(-3px) scale(1)';
            }, 150);
        });
    });
    
    // 하트 아이콘 추가 인터랙션
    const heartIcon = document.querySelector('.donation-icon');
    if (heartIcon) {
        heartIcon.addEventListener('mouseenter', function() {
            this.style.animationDuration = '0.5s';
        });
        
        heartIcon.addEventListener('mouseleave', function() {
            this.style.animationDuration = '1.5s';
        });
    }
}

/**
 * 기부 투명성 모달 표시
 */
function showTransparencyModal() {
    // 간단한 알림 (추후 더 나은 모달로 업그레이드 가능)
    const message = `🔍 기부 투명성 정보

✅ 모든 참가자의 기부 영수증은 단톡방에서 투명하게 공개됩니다.

✅ 챌린지 종료 후 전체 기부 내역을 정리하여 공유드립니다.

✅ 한국심장재단 공식 영수증으로 기부 확인이 가능합니다.

💝 우리의 성장이 심장병 어린이의 희망으로 이어집니다.`;

    // 더 나은 모달 UI (CSS 스타일링 포함)
    createCustomModal(message);
}

/**
 * 커스텀 모달 생성
 */
function createCustomModal(message) {
    // 기존 모달이 있으면 제거
    const existingModal = document.getElementById('transparency-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // 모달 HTML 생성
    const modal = document.createElement('div');
    modal.id = 'transparency-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>기부 투명성 공개</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <pre>${message}</pre>
                </div>
                <div class="modal-footer">
                    <button class="modal-btn confirm">확인</button>
                </div>
            </div>
        </div>
    `;
    
    // 모달 스타일 추가
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        #transparency-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .modal-content {
            background: white;
            border-radius: 16px;
            max-width: 500px;
            width: 100%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: slideUp 0.3s ease;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px 24px 0;
            border-bottom: 1px solid #eee;
            margin-bottom: 20px;
        }
        
        .modal-header h3 {
            margin: 0;
            color: #667eea;
            font-size: 1.25rem;
            font-weight: 700;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #999;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.2s ease;
        }
        
        .modal-close:hover {
            background: #f5f5f5;
            color: #333;
        }
        
        .modal-body {
            padding: 0 24px;
        }
        
        .modal-body pre {
            white-space: pre-line;
            font-family: inherit;
            margin: 0;
            line-height: 1.6;
            color: #333;
            font-size: 0.95rem;
        }
        
        .modal-footer {
            padding: 20px 24px 24px;
            text-align: center;
        }
        
        .modal-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 12px 32px;
            border-radius: 25px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .modal-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { 
                opacity: 0;
                transform: translateY(30px) scale(0.95);
            }
            to { 
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
    `;
    
    document.head.appendChild(modalStyle);
    document.body.appendChild(modal);
    
    // 모달 닫기 이벤트
    const closeModal = () => {
        modal.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
            modal.remove();
            modalStyle.remove();
        }, 300);
    };
    
    // 닫기 버튼 이벤트
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-btn').addEventListener('click', closeModal);
    
    // 오버레이 클릭 시 닫기
    modal.querySelector('.modal-overlay').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // ESC 키로 닫기
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    // fadeOut 애니메이션 추가
    const fadeOutStyle = document.createElement('style');
    fadeOutStyle.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(fadeOutStyle);
}

// 개발 환경에서만 실행되는 디버그 코드
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('맥퀸쌤 AI 챌린지 랜딩페이지 - 개발 모드');
    
    // 스크롤 진행률 표시 (개발용)
    initScrollProgress();
    
    // 개발용 단축키 (Ctrl + Shift + D로 디버그 정보 표시)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'D') {
            console.log('현재 뷰포트:', window.innerWidth + 'x' + window.innerHeight);
            console.log('스크롤 위치:', window.pageYOffset);
            console.log('Section 2 위치:', document.querySelector('.video-blog-section')?.offsetTop);
            console.log('Section 3 위치:', document.querySelector('.why-mcqueen')?.offsetTop);
            console.log('Section 4 위치:', document.querySelector('.mcqueen-story')?.offsetTop);
            console.log('Section 5 위치:', document.querySelector('.basic-course')?.offsetTop);
        }
    });
}

/**
 * 잠금 해제 안내 메시지 표시 및 인증 버튼으로 스크롤
 * @param {string} courseType - 'basic' 또는 'advanced'
 */
function showUnlockGuide(courseType) {
    // 인증 버튼 찾기
    const unlockBtn = courseType === 'basic' 
        ? document.querySelector('.unlock-btn')
        : document.querySelector('.unlock-btn-advanced');
    
    if (!unlockBtn) {
        console.error(`${courseType} 과정 인증 버튼을 찾을 수 없습니다.`);
        return;
    }
    
    // 인증 버튼으로 부드럽게 스크롤
    unlockBtn.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    
    // 버튼 하이라이트 효과
    unlockBtn.style.animation = 'none';
    setTimeout(() => {
        unlockBtn.style.animation = 'pulse 1.5s ease-in-out 3';
    }, 10);
    
    // 토스트 메시지 표시
    const courseName = courseType === 'basic' ? '기본과정' : '심화과정';
    showUnlockToast(`🔒 ${courseName} 자료는 인증이 필요합니다.\n하단의 "인증코드로 전체 자료 열기" 버튼을 클릭해주세요.`);
    
    console.log(`${courseType} 과정 잠금 해제 안내 표시`);
}

/**
 * 잠금 해제 안내 토스트 표시
 * @param {string} message - 표시할 메시지
 */
function showUnlockToast(message) {
    // 기존 토스트가 있으면 제거
    const existingToast = document.getElementById('unlockGuideToast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // 토스트 생성
    const toast = document.createElement('div');
    toast.id = 'unlockGuideToast';
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4);
        z-index: 10000;
        font-size: 0.95rem;
        font-weight: 500;
        text-align: center;
        white-space: pre-line;
        max-width: 90%;
        animation: slideUpFade 0.4s ease-out;
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // 4초 후 자동 제거
    setTimeout(() => {
        toast.style.animation = 'slideDownFade 0.4s ease-in forwards';
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 4000);
}

// 토스트 애니메이션 스타일 추가
if (!document.getElementById('unlock-toast-styles')) {
    const style = document.createElement('style');
    style.id = 'unlock-toast-styles';
    style.textContent = `
        @keyframes slideUpFade {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
        
        @keyframes slideDownFade {
            from {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
            to {
                opacity: 0;
                transform: translateX(-50%) translateY(20px);
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
                box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
            }
            50% {
                transform: scale(1.05);
                box-shadow: 0 8px 40px rgba(102, 126, 234, 0.6);
            }
        }
    `;
    document.head.appendChild(style);
}

// Section 5: 기본과정 21개 미션 초기화
function initSection5() {
    // API URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbykuQrG1PQEOd7qXOKuQcSN46kh1Y-KkSZO8n6j68SURnxs_eUR76iY5Y_fQw-XJFM0/exec';
    
    // 주차별 탭 필터링
    const tabBtns = document.querySelectorAll('.tab-btn');
    const missionRows = document.querySelectorAll('.mission-row');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const week = this.dataset.week;
            
            missionRows.forEach(row => {
                if (week === 'all') {
                    row.style.display = '';
                } else {
                    row.style.display = row.classList.contains(week) ? '' : 'none';
                }
            });
            
            console.log(`Section 5 탭 변경: ${week}`);
        });
    });
    
    // 모달 관련 요소들
    const lockedVideos = document.querySelectorAll('.video-link.locked');
    const lockedDocs = document.querySelectorAll('.doc-link.locked');
    const modal = document.getElementById('unlockModal');
    const closeBtn = modal ? modal.querySelector('.close') : null;
    const unlockBtn = document.querySelector('.unlock-btn');
    const submitCodeBtn = document.getElementById('submitCode');
    const authCodeInput = document.getElementById('authCode');
    const errorMessage = document.getElementById('errorMessage');
    
    // 모달 열기/닫기 함수
    function openModal() {
        if (modal) {
            modal.style.display = 'block';
            if (authCodeInput) authCodeInput.value = '';
            if (errorMessage) errorMessage.classList.remove('show');
            
            // 포커스를 입력 필드로 이동
            setTimeout(() => {
                if (authCodeInput) authCodeInput.focus();
            }, 300);
        }
    }
    
    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
        }
    }
    
    // 잠긴 영상과 미션지 클릭 시 안내 메시지 표시 - 1,2,3번 미션 제외
    lockedVideos.forEach(link => {
        const missionRow = link.closest('.mission-row');
        const missionNum = missionRow.dataset.mission;
        
        // 1,2,3번 미션은 항상 오픈이므로 클릭 방지하지 않음
        if (missionNum === '1' || missionNum === '2' || missionNum === '3') {
            return;
        }
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Section 5 잠긴 영상 클릭 - 인증 필요');
            showUnlockGuide('basic');
        });
    });
    
    lockedDocs.forEach(link => {
        const missionRow = link.closest('.mission-row');
        const missionNum = missionRow.dataset.mission;
        
        // 1,2,3번 미션은 항상 오픈이므로 클릭 방지하지 않음
        if (missionNum === '1' || missionNum === '2' || missionNum === '3') {
            return;
        }
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Section 5 잠긴 미션지 클릭 - 인증 필요');
            showUnlockGuide('basic');
        });
    });
    
    // 인증 버튼 클릭 시 모달 열기
    if (unlockBtn) {
        unlockBtn.addEventListener('click', function() {
            console.log('Section 5 인증 버튼 클릭');
            openModal();
        });
    }
    
    // 모달 닫기 이벤트 - X 버튼 (백업용 - HTML에 onclick도 있음)
    if (closeBtn && modal) {
        // 기존 onclick 제거하고 새로 추가
        closeBtn.onclick = function(e) {
            console.log('Section 5 기본과정 모달 X 버튼 클릭');
            modal.style.display = 'none';
        };
        console.log('Section 5 X 버튼 onclick 등록 완료:', closeBtn);
    } else {
        console.error('Section 5 closeBtn 또는 modal을 찾을 수 없음:', { closeBtn, modal });
    }
    
    // 모달 배경 클릭 시 닫기
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                console.log('Section 5 기본과정 모달 배경 클릭');
                closeModal();
            }
        });
    }
    
    // ESC 키로 모달 닫기
    const handleEscapeKey = function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            console.log('Section 5 기본과정 모달 ESC 키 닫기');
            closeModal();
        }
    };
    document.addEventListener('keydown', handleEscapeKey);
    
    // 인증 코드 검증
    if (submitCodeBtn) {
        submitCodeBtn.addEventListener('click', async function() {
            const code = authCodeInput ? authCodeInput.value.trim() : '';
            
            if (!code) {
                showError('인증 코드를 입력해주세요.');
                return;
            }
            
            // 로딩 상태
            submitCodeBtn.disabled = true;
            submitCodeBtn.textContent = '확인 중...';
            if (errorMessage) errorMessage.classList.remove('show');
            
            try {
                // 디버그 모드로 더 많은 정보 요청
                const url = `${SCRIPT_URL}?code=${encodeURIComponent(code)}&type=basic&debug=true`;
                console.log('=== Section 5 인증 API 호출 ===');
                console.log('URL:', url);
                console.log('입력된 코드:', code);
                console.log('현재 시간 (브라우저):', new Date().toISOString());
                console.log('현재 시간 (로컬):', new Date().toString());
                
                const response = await fetch(url);
                const result = await response.json();
                
                console.log('=== Section 5 인증 API 응답 ===');
                console.log('전체 응답:', JSON.stringify(result, null, 2));
                console.log('valid:', result.valid);
                console.log('message:', result.message);
                console.log('data:', result.data);
                console.log('expiryDate (direct):', result.expiryDate);
                console.log('expiryDate (from data):', result.data?.expiryDate);
                
                if (result.valid === true) {
                    // 인증 성공
                    unlockAllVideos();
                    
                    // 배포용: localStorage 저장 비활성화
                    // localStorage.setItem('basicCourseUnlocked', 'true');
                    // localStorage.setItem('basicCourseCode', code);
                    
                    const expiryDate = result.data?.expiryDate || result.expiryDate || '정보 없음';
                    console.log('사용할 만료일:', expiryDate);
                    alert(`✅ 기본과정 영상이 잠금 해제되었습니다!\n\n만료일: ${expiryDate}\n\n※ 페이지 새로고침 시 다시 잠금됩니다.`);
                    closeModal();
                } else {
                    // 인증 실패 - 더 명확한 오류 메시지 표시
                    const errorMsg = result.message || '올바르지 않은 인증 코드입니다.';
                    console.error('=== 인증 실패 ===');
                    console.error('실패 메시지:', errorMsg);
                    console.error('입력 코드:', code);
                    console.error('응답 전체:', result);
                    console.error('현재 시간:', new Date().toISOString());
                    
                    // 개발자가 확인할 수 있도록 alert에도 상세 정보 표시
                    alert(`❌ 인증 실패\n\n${errorMsg}\n\n개발자 도구 콘솔에서 상세 정보를 확인하세요.`);
                    showError(errorMsg);
                }
            } catch (error) {
                console.error('=== Section 5 인증 오류 ===');
                console.error('오류:', error);
                console.error('오류 상세:', error.message, error.stack);
                showError('인증 중 오류가 발생했습니다. 다시 시도해주세요.');
            } finally {
                submitCodeBtn.disabled = false;
                submitCodeBtn.textContent = '잠금 해제';
            }
        });
    }
    
    // Enter 키로도 제출 가능
    if (authCodeInput) {
        authCodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && submitCodeBtn) {
                submitCodeBtn.click();
            }
        });
    }
    
    // 에러 메시지 표시
    function showError(message) {
        if (errorMessage) {
            errorMessage.textContent = message;
            errorMessage.classList.add('show');
        }
    }
    
    // 모든 영상과 미션지 잠금 해제
    function unlockAllVideos() {
        // 영상 잠금 해제
        const lockedVideos = document.querySelectorAll('.video-link.locked');
        lockedVideos.forEach(link => {
            link.classList.remove('locked');
            link.classList.add('unlocked');
            link.innerHTML = '🔓 영상';
            
            // 클릭 이벤트 리스너 제거하고 정상 링크로 동작하도록 설정
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);
        });
        
        // 미션지 잠금 해제
        const lockedDocs = document.querySelectorAll('.doc-link.locked');
        lockedDocs.forEach(link => {
            link.classList.remove('locked');
            link.innerHTML = '📄 미션지';
            
            // 클릭 이벤트 리스너 제거하고 정상 링크로 동작하도록 설정
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);
        });
        
        console.log('Section 5 모든 영상과 미션지 잠금 해제 완료');
    }
    
    // 스크롤 애니메이션 (Intersection Observer)
    const basicCourseSection = document.querySelector('.basic-course');

    if (basicCourseSection) {
        // 스크립트 오류 발생 여부와 관계없이 기본 섹션이 항상 보이도록 처리
        basicCourseSection.classList.add('visible');
    }

    if ('IntersectionObserver' in window && basicCourseSection) {
        const courseObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });

        courseObserver.observe(basicCourseSection);
    }
    
    // 페이지 로드 시 이전 잠금 해제 상태 확인
    // 임시로 비활성화 - 항상 잠긴 상태로 시작
    // if (localStorage.getItem('basicCourseUnlocked') === 'true') {
    //     console.log('Section 5 이전 잠금 해제 상태 복원');
    //     // 잠시 후에 실행하여 DOM이 완전히 로드된 후 실행
    //     setTimeout(() => {
    //         unlockAllVideos();
    //     }, 100);
    // }
    
    // 기본과정도 항상 잠긴 상태로 시작
    console.log('Section 5 기본과정은 항상 잠긴 상태로 시작');
    
    // 테이블 행 클릭 추적
    missionRows.forEach((row, index) => {
        row.addEventListener('click', function(e) {
            // 링크 클릭이 아닌 경우에만 로그
            if (!e.target.closest('a')) {
                const missionNumber = this.dataset.mission;
                console.log(`Section 5 미션 ${missionNumber}번 행 클릭`);
            }
        });
    });
    
    console.log('Section 5 기본과정 미션 테이블 초기화 완료');
}

// ===== Section 6: 심화과정 초기화 =====
function initSection6() {
    console.log('Section 6 심화과정 초기화 시작');
    
    // API URL (기본과정과 동일)
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbykuQrG1PQEOd7qXOKuQcSN46kh1Y-KkSZO8n6j68SURnxs_eUR76iY5Y_fQw-XJFM0/exec';
    
    // 심화과정 모달 관련 요소들
    const modalAdvanced = document.getElementById('unlockModalAdvanced');
    const closeBtnAdvanced = modalAdvanced ? modalAdvanced.querySelector('.close-advanced') : null;
    const unlockBtnAdvanced = document.querySelector('.unlock-btn-advanced');
    const submitCodeBtnAdvanced = document.getElementById('submitCodeAdvanced');
    const authCodeInputAdvanced = document.getElementById('authCodeAdvanced');
    const errorMessageAdvanced = document.getElementById('errorMessageAdvanced');
    
    // 심화과정 잠긴 아이템들 (클릭 방지)
    const advancedSection = document.querySelector('.advanced-course');
    if (advancedSection) {
        const lockedVideos = advancedSection.querySelectorAll('.video-link.locked');
        const lockedDocs = advancedSection.querySelectorAll('.doc-link.locked');
        
        // 잠긴 영상 링크 클릭 시 안내 메시지 표시
        lockedVideos.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Section 6 잠긴 영상 클릭 - 인증 필요');
                showUnlockGuide('advanced');
            });
        });
        
        // 잠긴 미션지 링크 클릭 시 안내 메시지 표시
        lockedDocs.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Section 6 잠긴 미션지 클릭 - 인증 필요');
                showUnlockGuide('advanced');
            });
        });
    }
    
    // 모달 열기/닫기 함수들
    function openModalAdvanced() {
        if (modalAdvanced) {
            modalAdvanced.style.display = 'block';
            if (authCodeInputAdvanced) authCodeInputAdvanced.value = '';
            if (errorMessageAdvanced) errorMessageAdvanced.classList.remove('show');
            console.log('Section 6 심화과정 인증 모달 열림');
        }
    }
    
    function closeModalAdvanced() {
        if (modalAdvanced) {
            modalAdvanced.style.display = 'none';
            console.log('Section 6 심화과정 인증 모달 닫힘');
        }
    }
    
    // 이벤트 리스너 등록
    if (unlockBtnAdvanced) {
        unlockBtnAdvanced.addEventListener('click', openModalAdvanced);
    }
    
    if (closeBtnAdvanced && modalAdvanced) {
        // 기존 onclick 제거하고 새로 추가
        closeBtnAdvanced.onclick = function(e) {
            console.log('Section 6 심화과정 모달 X 버튼 클릭');
            modalAdvanced.style.display = 'none';
        };
        console.log('Section 6 X 버튼 onclick 등록 완료:', closeBtnAdvanced);
    } else {
        console.error('Section 6 closeBtnAdvanced 또는 modalAdvanced를 찾을 수 없음:', { closeBtnAdvanced, modalAdvanced });
    }
    
    // 모달 외부 클릭 시 닫기
    if (modalAdvanced) {
        modalAdvanced.addEventListener('click', function(e) {
            if (e.target === modalAdvanced) {
                console.log('Section 6 심화과정 모달 배경 클릭');
                closeModalAdvanced();
            }
        });
    }
    
    // ESC 키로 모달 닫기
    const handleEscapeKeyAdvanced = function(e) {
        if (e.key === 'Escape' && modalAdvanced && modalAdvanced.style.display === 'block') {
            console.log('Section 6 심화과정 모달 ESC 키 닫기');
            closeModalAdvanced();
        }
    };
    document.addEventListener('keydown', handleEscapeKeyAdvanced);
    
    // 인증 코드 검증 함수
    async function verifyAdvancedCode(code) {
        try {
            const url = `${SCRIPT_URL}?code=${encodeURIComponent(code)}&type=advanced`;
            console.log('Section 6 심화과정 인증 요청:', url);
            
            const response = await fetch(url);
            const result = await response.json();
            
            console.log('Section 6 심화과정 인증 응답:', result);
            return result;
        } catch (error) {
            console.error('Section 6 심화과정 인증 오류:', error);
            throw error;
        }
    }
    
    // 에러 메시지 표시 함수
    function showErrorAdvanced(message) {
        if (errorMessageAdvanced) {
            errorMessageAdvanced.textContent = message;
            errorMessageAdvanced.classList.add('show');
        }
    }
    
    // 심화과정 전체 콘텐츠 잠금 해제 함수
    function unlockAllAdvancedContent() {
        console.log('Section 6 심화과정 전체 잠금 해제 시작');
        
        if (!advancedSection) {
            console.error('Section 6 심화과정 섹션을 찾을 수 없음');
            return;
        }
        
        // 영상 링크 데이터
        const videoLinks = {
            '1': 'https://youtu.be/NQPt3HwLHFY',
            '2': 'https://youtu.be/l0Ur9AmEzq4',
            '3': 'https://youtu.be/DZDuNuLr_B4',
            '4': 'https://youtu.be/tyKj-JsOp8Q',
            '5': 'https://youtu.be/E_ypuxamYFM',
            '6': 'https://youtu.be/eCQgZLt0f2s',
            '7': 'https://youtu.be/djMWj4wOQj4',
            '8': 'https://youtu.be/1g6WSGNsask',
            '9': 'https://youtu.be/hSld-gdEtiQ',
            '11': 'https://youtu.be/jQ27AEnyM-U',
            '12': 'https://youtu.be/qLQ7xsU_K3U',
            '13': 'https://youtu.be/PuCeSKpVdAk',
            '14': 'https://youtu.be/GFjApeQZdog'
        };
        
        // 미션지 링크 데이터
        const docLinks = {
            '1': 'https://blog.naver.com/mcqueenssam/223988241565',
            '2': 'https://blog.naver.com/mcqueenssam/223988248535',
            '3': 'https://blog.naver.com/mcqueenssam/223988389613',
            '4': 'https://blog.naver.com/mcqueenssam/223989321915',
            '5': 'https://blog.naver.com/mcqueenssam/223991396132',
            '6': 'https://blog.naver.com/mcqueenssam/223992335888',
            '7': 'https://blog.naver.com/mcqueenssam/223992435493',
            '8': 'https://blog.naver.com/mcqueenssam/223992554635',
            '9': 'https://blog.naver.com/mcqueenssam/223992616340',
            '10': 'https://blog.naver.com/mcqueenssam/223993600429'
        };
        
        // 영상 잠금 해제
        const lockedVideos = advancedSection.querySelectorAll('.video-link.locked');
        lockedVideos.forEach(link => {
            const missionRow = link.closest('.mission-row');
            const missionNum = missionRow.dataset.mission;
            
            // 10번 미션은 영상 없음이므로 스킵
            if (missionNum === '10') return;
            
            const videoUrl = videoLinks[missionNum];
            if (videoUrl) {
                link.classList.remove('locked');
                link.classList.add('unlocked');
                link.innerHTML = '🔓 영상';
                
                // 클릭 이벤트 리스너 제거하고 정상 링크로 동작하도록 설정
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);
                
                console.log(`Section 6 미션 ${missionNum}번 영상 잠금 해제`);
            }
        });
        
        // 미션지 잠금 해제
        const lockedDocs = advancedSection.querySelectorAll('.doc-link.locked');
        lockedDocs.forEach(link => {
            const missionRow = link.closest('.mission-row');
            const missionNum = missionRow.dataset.mission;
            
            const docUrl = docLinks[missionNum];
            if (docUrl) {
                link.classList.remove('locked');
                link.innerHTML = '📄 미션지';
                
                // 클릭 이벤트 리스너 제거하고 정상 링크로 동작하도록 설정
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);
                
                console.log(`Section 6 미션 ${missionNum}번 미션지 잠금 해제`);
            }
        });
        
        console.log('Section 6 심화과정 모든 영상과 미션지 잠금 해제 완료');
    }
    
    // 인증 코드 제출 이벤트
    if (submitCodeBtnAdvanced && authCodeInputAdvanced) {
        submitCodeBtnAdvanced.addEventListener('click', async function() {
            const code = authCodeInputAdvanced.value.trim();
            
            if (!code) {
                showErrorAdvanced('인증 코드를 입력해주세요.');
                return;
            }
            
            // 로딩 상태
            submitCodeBtnAdvanced.disabled = true;
            submitCodeBtnAdvanced.textContent = '확인 중...';
            if (errorMessageAdvanced) errorMessageAdvanced.classList.remove('show');
            
            try {
                console.log('=== Section 6 심화과정 인증 시작 ===');
                console.log('입력된 코드:', code);
                console.log('현재 시간:', new Date().toISOString());
                
                const result = await verifyAdvancedCode(code);
                
                console.log('=== Section 6 인증 API 응답 ===');
                console.log('전체 응답:', JSON.stringify(result, null, 2));
                console.log('valid:', result.valid);
                console.log('message:', result.message);
                console.log('data:', result.data);
                console.log('expiryDate (direct):', result.expiryDate);
                console.log('expiryDate (from data):', result.data?.expiryDate);
                
                if (result.valid === true) {
                    // 인증 성공
                    unlockAllAdvancedContent();
                    
                    // 배포용: localStorage 저장 비활성화
                    // localStorage.setItem('advancedCourseUnlocked', 'true');
                    // localStorage.setItem('advancedCourseCode', code);
                    
                    const expiryDate = result.data?.expiryDate || result.expiryDate || '정보 없음';
                    console.log('사용할 만료일:', expiryDate);
                    alert(`✅ 심화과정 영상이 잠금 해제되었습니다!\n\n만료일: ${expiryDate}\n\n※ 페이지 새로고침 시 다시 잠금됩니다.`);
                    closeModalAdvanced();
                } else {
                    // 인증 실패 - 더 명확한 오류 메시지 표시
                    const errorMsg = result.message || '올바르지 않은 인증 코드입니다.';
                    console.error('=== 심화과정 인증 실패 ===');
                    console.error('실패 메시지:', errorMsg);
                    console.error('입력 코드:', code);
                    console.error('응답 전체:', result);
                    console.error('현재 시간:', new Date().toISOString());
                    
                    // 개발자가 확인할 수 있도록 alert에도 상세 정보 표시
                    alert(`❌ 인증 실패\n\n${errorMsg}\n\n개발자 도구 콘솔에서 상세 정보를 확인하세요.`);
                    showErrorAdvanced(errorMsg);
                }
            } catch (error) {
                console.error('=== Section 6 심화과정 인증 오류 ===');
                console.error('오류:', error);
                console.error('오류 상세:', error.message, error.stack);
                showErrorAdvanced('인증 중 오류가 발생했습니다. 다시 시도해주세요.');
            } finally {
                submitCodeBtnAdvanced.disabled = false;
                submitCodeBtnAdvanced.textContent = '잠금 해제';
            }
        });
        
        // Enter 키로도 제출 가능
        authCodeInputAdvanced.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                submitCodeBtnAdvanced.click();
            }
        });
    }
    
    // 페이지 로드 시 이전 잠금 해제 상태 확인
    // 임시로 비활성화 - 항상 잠긴 상태로 시작
    // if (localStorage.getItem('advancedCourseUnlocked') === 'true') {
    //     console.log('Section 6 이전 인증 상태 확인됨 - 자동 잠금 해제');
    //     // DOM이 완전히 렌더링된 후 실행
    //     setTimeout(() => {
    //         unlockAllAdvancedContent();
    //     }, 100);
    // }
    
    // 심화과정은 항상 잠긴 상태로 시작
    console.log('Section 6 심화과정은 항상 잠긴 상태로 시작');
    
    // 심화과정 미션 행 클릭 이벤트 (디버깅용)
    const advancedMissionRows = advancedSection ? advancedSection.querySelectorAll('.mission-row') : [];
    advancedMissionRows.forEach((row, index) => {
        row.addEventListener('click', function(e) {
            // 링크 클릭이 아닌 경우에만 로그
            if (!e.target.closest('a')) {
                const missionNumber = this.dataset.mission;
                console.log(`Section 6 심화과정 미션 ${missionNumber}번 행 클릭`);
            }
        });
    });
    
    console.log('Section 6 심화과정 초기화 완료');
}

/**
 * Section 7: 참가자 후기 및 추천 초기화
 */
function initSection7() {
    console.log('Section 7 참가자 후기 및 추천 초기화 시작');
    
    // 탭 전환 기능
    const tabBtns = document.querySelectorAll('.review-tab-btn');
    const tabContents = document.querySelectorAll('.review-tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            console.log(`후기 탭 전환: ${tabName}`);
            
            // 모든 탭 버튼 비활성화
            tabBtns.forEach(b => b.classList.remove('active'));
            // 클릭한 탭 활성화
            this.classList.add('active');
            
            // 모든 콘텐츠 숨기기
            tabContents.forEach(content => content.classList.remove('active'));
            // 선택한 콘텐츠 보이기
            const targetContent = document.querySelector(`[data-content="${tabName}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // 후기 모달 기능
    const modal = document.getElementById('reviewModal');
    const closeBtn = modal ? modal.querySelector('.close') : null;
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    // 전체 후기 데이터 (파일에서 가져온 전체 내용)
    const reviewsData = {
        'basic-1': {
            name: '김OO',
            school: 'OO 유치원',
            text: `21일이라는 소중한 개인 시간을 아낌없이 투자하시며, 동료 교사들을 위해 AI 재능 기부를 해주신 점 진심으로 감사드립니다.
선생님의 열정적인 가르침 덕분에 AI 문맹에서 벗어나 상위 1%의 자신감을 갖게 되었습니다. 복잡하고 어렵게만 느껴지던 AI를 친절하고 쉽게 풀어주시며, 저희들을 성장 시키고자 하는  굳은 의지가 깊이 와 닿았습니다.
사실 처음에는 포기하고 싶기도 했지만 선생님 덕분에 더 나은 교사로 변화하고자 하는 동기와 용기를 얻었습니다.  감사합니다.`
        },
        'basic-2': {
            name: '우OO',
            school: 'OO 중학교',
            text: `21일간의 대장정을 끝나니 시원섭섭합니다. "학교에 돌아가면 선생님들은 상위 1%안에 들겁니다." 라는 말이 무슨 느낌인지 알 것 같기도 하고.....
늘 느끼는 것이지만 배운 것을 끊임없이 사용해야 발전과 성장이 있을텐데 고것이 살~짝 걱정됩니다만...지금으로서는 20대 대학생 아들딸을 제치고 제가 우리 집안에서는 AI 활용 능력 TOP 입니다. 녹화 영상속 선생님의 노고와 열정, 애씀과 애정에 다시 한 번 무한 감사드립니다.`
        },
        'basic-3': {
            name: '오OO',
            school: 'OO 초등학교',
            text: `디지털 디톡스의 삶을 살다가, 연구년 주제에서 희망하지 않은 디지털 관련 연구주제를 받고 막막하던 중에 감사하게도 AI 챌린지를 열어주셔서 참여하게 되었습니다. 이 21일간의 챌린지로 이전에는 상상하지도 못한 AI를 다루고 여러 결과물을 만들수 있게 되었습니다. 맥퀸 선생님께서 비유하신대로 매트릭스의 빨간약을 먹은 것처럼 이전과 다른 사람이 된것 같습니다. 아직은 이것을 적용하고 능숙하게 사용하기에는 부족함이 많지만 계속 복습하고 배워나가며 활용하도록 끊임없이 도전해보려고 합니다. 바쁘신 중에 무려 21개의 프리미엄 강의로 챌린지를 끝까지 이끌어주신 맥퀸 선생님께 너무나 감사드립니다. 그리고 함께 해주신 선생님들 덕분에 더 풍성한 배움을 경험할수 있었습니다. 개인적으로 AI 챌린지는 이번 학습연구년의 꽃이 아닐까.. 큰 행운을 주셔서 다시 한번 감사드립니다.`
        },
        'basic-4': {
            name: '장OO',
            school: 'OO 초등학교',
            text: `나름 학창 시절부터 '얼리' 축에 들었는데, 인공지능에는 영 적응하지 못하고 있었습니다. 모든 게 가능하다고 하니 오히려 막막하게 느껴졌던 것 같습니다. 원래 말이 추상적이고 대충하는 스타일이라 결과물도 만족스럽지 않았던 탓이 컸던 것 같습니다. 그런데 이번 연구년 동안 극적으로 만난 선생님께 배움을 얻으며 다양한 활용 방법을 익히고, 적응력을 높이게 되니 인공지능에 대해  자유롭게 상상할 힘이 생겼습니다. 내가 원하는 것을 얻어낼 수 있는 길을 찾아낸 것 같아 벅찬 마음입니다. 하다 보니 파이썬도 다루게 되고, API도 활용해 보고 싶다는 생각이 듭니다. 새로운 분야로 확장하고 싶은 욕심도 생겼습니다.

힘차게 21일 동안 프로그램을 운영해 주신 선생님께 감사드리며, 잠시 쉬신 후 2차 심화반도 부탁드리고 싶습니다. 여전히 배고프다고 하면 웃으실까요? 선생님께서 날마다 보여주신 성실함과 의지의 공유, 그리고 공감 또한 잠재적 교육과정 중 하나였다고 생각합니다. 깊이 감사드립니다. 연구년 동안 의욕적으로 학습하며 교사로서 갖추고 싶었던 역량을 충분히 채울 수 있었습니다. 기꺼이 나누어 주시고 안내해 주신 선생님 덕분에 하루 20~30분씩 AI를 꾸준히 공부하고 싶다는 계획도 세웠습니다. 이 습관이 자리 잡아 선생님의 교육 목표 달성의 증표가 될 수 있도록 노력하겠습니다. 진심으로 감사드립니다.`
        },
        'basic-5': {
            name: '정OO',
            school: 'OO 고등학교',
            text: `'새로운 언어를 배운다는 것은 새로운 세계를 여는 것과 같다.'는 말처럼 선생님 덕분에 21일 만에 저의 많은 부분이 바뀌었습니다. 생성형 AI는 챗GPT 뿐인 것으로 알고 있었고  이슈가 되고 있는 AI분야를 공부해야 한다는 압박감이 있어서 관련 연수를 찾아보았으나 마땅한 것이 없어 도서관만 기웃거렸습니다. 이런 저에게 선생님은 애써 학습한 내용을 잘 정리해서 알려주시고 아프고 아이도 돌봐야 하는 상황에서 할애해 주신 시간과 노력은 진정한 교사의 모습을 상기시켰습니다. 어려워 하고 꾀부리는 아이들에게 하는 것처럼 따뜻한 말과 기운을 북돋는 사탕?을 주시며 아낌없이 나눠주는 모습을 보며 과연 나도 그렇게 하고 있는가? 생각하게 되었습니다. 저에게 이런 기회를 주셔서 감사드리고 일시적인 학습에 끝나지 않고 생활 속에서 밀접하게 활용하며 특히 업무와 학생지도에서 유용하게 활용하고 주변선생님들과도 공유 하겠습니다. 감사합니다.`
        },
        'basic-6': {
            name: '권OO',
            school: 'OO 유치원',
            text: `나눔과 감사.. 올해 학습연구년 하며 막연히 배워보고 싶었던 것들인데 저는 학원을 다녀야 하나, 강의를 들어야 하나 막막했었어요. 뭔가를 배워보며 보통은 오프라인 학원에서 강의를 들어야 소통이 가능하다고 생각했었는데 이번 온라인 챌린지를 하니 선생님들과 직접 소통을 하지 않아도 결과물 공유를 통해 다른 분들과 소통하는 느낌이 들며 의욕과 용기를 얻을 수 있어서 이런 시스템을 만드신 것도 너무 감사해요. 강의 내용 뿐 아니라 강의를 이끌어가는 기획 부분도 정말 중요한 요소인 것을 다시 한번 깨닫습니다. 사실 유치원 현장은 단순 반복인 업무가 많은데 업무에 치여 발전적인, 거시적인 방향에 대한 답답함과 갈망이 있었는데 ai와의 대화를 통해 다른 사람의 관점을 간접 이해하며 교실의 세계관이 다른 전문가들과 소통하는 협업으로 확장되니 너무 좋습니다. 다른 분들은 무섭다고 하는 분들이 있는데 저는 여기서 얻는 발전적 견해들이 저에게 또다른 자극제와 윤활유가 되었습니다. 내년 유치원 생활이 기대가 되고 말씀하신 한개의 뇌를 더 가져서, 좌뇌, 우뇌, ai뇌를 활용해 업무에 도움을 얻을것을 생각하니 너무 든든하고 무한 감사 드립니다.`
        },
        'basic-7': {
            name: '이O',
            school: 'OO 고등학교',
            text: `드디어 미션 클리어하였습니다!! 기말고사를 보다보니, '내가 이런 걸 했었다니..' 하고 새삼 놀라게 됩니다. 골수까지 빼주신 맥퀸님!!! 감사합니다. 
무엇보다 AI를 겁내지 않게 해주셔서, AI 앞에서 주눅들지 않게 해주셔서 감사합니다. 이제 챗지피티도 클로드도 좀 만만해졌습니다.
아낌없이 주시는 맥퀸님과 열정을 다해 배우신 선생님들! 이 챌린지로 좋은 인연 맺게되어 정말 좋아요.`
        },
        'basic-8': {
            name: '한OO',
            school: 'OO 중학교',
            text: `챌린지 참여 전에는 컴퓨터나 생성형 ai를 사용하는 것이 쉽지 않았어요. 간단한 것들만 활용하고 더 깊이 있는 내용은 접해보지 못했었어요. 챗gpt와 뤼튼만 알고 있었는데, gemini /claude와 같은 새로운 프로그램을 알게 되어 신세계!! 그리고 프롬프트를 서로 비교해보고 더 나은 결과를 도출하는 방법도 아주 좋았습니다. 액셀 자동화 기능도 너무 멋지고 마법같이 신기했어요. 

이제는 업무와 수업에 적극적으로 활용하여 칼퇴! 업무에 너무 많은 시간을 할애하지 않아도 될 것 같아 감사합니다. ^^`
        },
        'basic-9': {
            name: '김OO',
            school: 'OO 초등학교',
            text: `언제부턴가 조금 더 효율적으로 일하고 싶었고 그러기 위해선 AI를 다루면 좋을 것 같아서 독학을 해보았지만 결국 네이버 지식 검색 정도의 수준으로 AI를 이용하고 있었습니다. 그런데 맥퀸 선생님의 강의에 참여하고 나서 한번에 몇 단계를 도약한 기분입니다. 원하는 이미지, 음악, 영상 생성은 물론이며,  문서 도식화, ppt화, 엑셀 vba 코드 생성, 구글 앱스크립트 자동화, 게임 만들기 등 다양한 AI의 기능을 폭넓게 알고 활용할 수 있게 되었습니다.`
        },
        'advanced-1': {
            name: '김OO',
            school: 'OO 초등학교',
            text: `이제 앱 개발도 이것저것 만들어보고 싶고, 전에 맥퀸선생님이 말씀하셨듯 내가 자주 쓸 유용한 기능부터 더 익숙해지면서 활용도를 높여야겠다는 생각이 듭니다. 무료는 크레딧이나 제한이 있어 하다가 멈출때의 분노!!! 암튼, 이번 미션도 신기하고, 넘 재미있었어요^^ 에듀파인 품의 한번에 하는것에 감동의 눈물을 흘림 ㅋ 맥퀸 선생님, 올해 저에게 ai의 세계를 알려주셔서 감사드립니다. 또다른 터닝포인트의 해가 되었습니다^^`
        },
        'advanced-2': {
            name: '진OO',
            school: 'OO 초등학교',
            text: `기본과정 챌린지를 참여했었지만, 말 그대로 전 ai 관련하여 첫발을 땐 걸음마 단계였습니다. 심화 챌린지에 참여하며 이전 기본 챌린지보다 각 미션을 수행하며 시행착오를 더 많이 겪었습니다. 그래도 그 시행착오 덕분에 조금 더 다양하고 정확하게 각 미션들을 이해할 수 있었습니다. 특히, 이번 심화 챌린지는 학교 현장에서 업무를 수행함과 학생들의 수업에 활용할 수 있는 여러 가지 프로그램과 기능을 익힐 수 있어 너무 좋았습니다. 심화 챌린지를 통해 느린 걸음이지만 ai 활용에 한걸음 더 다가간 느낌입니다.^^ 기본 과정을 너머 심화 챌린지까지 소중한 재능과 시간을 함께 나눠주시며 진정한 '같이의 가치'를 실천하신 맥퀸 선생님!!  감사했습니다.`
        },
        'advanced-3': {
            name: '권OO',
            school: 'OO 유치원',
            text: `지난번엔 ai 활용하는 법을 배워 사피엔스에서 인간으로 진화한 느낌이었다면, 이젠 ai활용 어플개발까지 해보면서 문명인이 된 것 같습니다
챗gpt도 3월에 처음 써본 저에게 이세계는 확장성이 무궁무진하고 선생님과 여러가지 경험해보니 ai에 대한 자신감 뿜뿜입니다
저는 교사의 장점은 동료교사에 대한 인간적인 연대, 지지, 협업이라고 생각합니다
오랫만에 하이퀄리티 협업 스터디에 참여하게 되어 영광이고 저도 계속 마스터해서 나중에 본업으로 돌아가 많이 나눔하겠습니당^^ 내년에 유치원 학습공동체 연수 강사님으로 초빙해도 될까요? 담당자님께 적극 추천드릴래요!!
그리고 추후 대면 비대면 학습공동체나 소모임 등등 해주시면 저는 적극 참여하겠습니당!!`
        },
        'advanced-4': {
            name: '이O',
            school: 'OO 고등학교',
            text: `심화에서는 1기에서 매우 어렵다고 생각한 것(apps script 등)에 약간의 익숙함을 느꼈습니다. 척척 해내진 못하지만 끈질기게 붙들고 시도하다보면 된다는 경험도 얻었습니다. 그리고 생소한 api에 대해 접하게 되어 좋았습니다. 나만 몰랐지 이미 널리 쓰이고 있다는 사실에 약간의 충격!!!!을 받았습니다. 함께 할 수 있어 감사했습니다. 선생님. 정말 너무너무 고맙습니다🙏`
        },
        'advanced-5': {
            name: '김OO',
            school: 'OO 중학교',
            text: `처음 챌린지를 할 때는 모르는 것이 많아 미션을 해결하는 데 초점을 두었다면, 이번 챌린지에서는 내 삶과 어떻게 연관을 지을 수 있을까에 대한 고민을 많이 하는 시간이었습니다. 학교에서 쓸데없이 시간을 많이 소모하는 일들로 지친 순간들이 많았는데 이 지식을 갖고 내년에 복직하면 더욱 생산성 있는 시간을 보내기 위해 노력하려구요. 이제는 인공지능 없는 제 삶을 상상할 수 없습니다. 단순히 의존하는 것이 아니라 어떻게 더 잘 쓸지에 대해 끊임없이 고민하는 시간을 가져보려구요. 늘 그렇듯이, 감사합니다. 저희의 성장을 이렇게 매번 이끌어 주셔서 감사한 마음 가득인데, 혹여나 건강이나 정신적으로 고단해지지 않으시길 바랍니다. 감사합니다.`
        },
        'advanced-6': {
            name: '장OO',
            school: 'OO 초등학교',
            text: `인공지능에 대한 관심이 깊어졌어요. 저는 포괄적인 이해 수준에서(전문가 강연, 책) 선생님과 함께직접 경험을 하면서 인공지능의 위력과 사용 방향에 대해서 구체적으로 접근하게 된 점이 가장 인상적이에요. 선생님께 배우고 나서 용기를 얻어  aws에서 하는 교사- 개발자 워크숍에 가 보고  깃허브나, n8n, 러버블 같은 프로그램을 통해 개발하는 과정을 지켜 보며 교육에 대한 이해를 바탕으로 개발해서 활용해야 되겠다는 생각이 깊어졌어요. 지금도 관련 책들을 보면서 선생님이 나눠주신 고민들을 이어가게 되네요. 기술이 우리의 삶과 만나 어떤 변화를 일으킬지 잘 모르지만, 선생님 덕분에 보다 깊이 이해하고 고민할 수 있게 되었어요. 진심으로 감사합니다.`
        },
        'advanced-7': {
            name: '이OO',
            school: 'OO 중학교',
            text: `마지막 미션이라고 생각하니 너무 아쉽네요.

단톡방에 글도 쓸 수 없으니 또 아쉽구요.

심화 챌린지라 정말 어려웠고, 미션 수행이 매끄럽지 못했지만 마지막 미션까지 어떻게든 완료하게 되어 기뻐요.

저는 중학교 학생들 대상으로 수학클리닉 앱을 만들어봤어요. 63개의 문항을 답한 걸 가지고 AI처방을 할 수 있도록 제미나이API키 사용하고 클로드와 바이브코딩했습니다. 클로드가 돈만 요구하고 성실하게 잘 안해줘서 몇날몇일 많이 싸웠습니다. 

더 멋지고 획기적인,, 맥퀸쌤의 자랑이 되고픈 앱을 개발하고 싶었는데 저의 역량이 요것밖에 안되네요. 그래도 마지막 미션으로 다시 한 번 깃허브를 이용하여 배포도 해보고 의미있는 시간이었습니다. 모두 수고 많으셨어요. 

다시 한 번 맥퀸쌤 감사드려요!`
        },
    };
    
    // 더보기 버튼 클릭 이벤트
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const reviewId = this.dataset.review;
            const review = reviewsData[reviewId];
            
            console.log(`후기 상세보기 클릭: ${reviewId}`);
            
            if (review && modal) {
                const modalReviewerName = modal.querySelector('.modal-reviewer-name');
                const modalReviewerSchool = modal.querySelector('.modal-reviewer-school');
                const modalReviewBody = modal.querySelector('.modal-review-body');
                
                if (modalReviewerName) modalReviewerName.textContent = review.name;
                if (modalReviewerSchool) modalReviewerSchool.textContent = review.school;
                if (modalReviewBody) modalReviewBody.textContent = review.text;
                
                modal.style.display = 'block';
            }
        });
    });
    
    // 모달 닫기 이벤트
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            console.log('후기 모달 닫기');
            modal.style.display = 'none';
        });
    }
    
    // 모달 외부 클릭시 닫기
    if (modal) {
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                console.log('후기 모달 외부 클릭으로 닫기');
                modal.style.display = 'none';
            }
        });
    }
    
    console.log('Section 7 참가자 후기 및 추천 초기화 완료');
}

/**
 * Section 8: FAQ 초기화
 */
function initSection8() {
    console.log('Section 8 FAQ 초기화 시작');
    
    // FAQ 아코디언 기능
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // 현재 아이템이 열려있는지 확인
            const isActive = item.classList.contains('active');
            
            console.log(`FAQ 클릭: ${question.querySelector('.faq-text').textContent.substring(0, 30)}...`);
            
            // 모든 아이템 닫기
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // 클릭한 아이템이 닫혀있었다면 열기
            if (!isActive) {
                item.classList.add('active');
                console.log('FAQ 열림');
            } else {
                console.log('FAQ 닫힘');
            }
        });
    });
    
    // 첫 번째 FAQ 자동으로 열기 (선택사항)
    // if (faqItems.length > 0) {
    //     faqItems[0].classList.add('active');
    //     console.log('첫 번째 FAQ 자동 열림');
    // }
    
    console.log('Section 8 FAQ 초기화 완료');
}

// Section 9: 나눔의 선순환 초기화
function initSection9() {
    console.log('Section 9 초기화 시작');
    
    // 카카오톡 공유 버튼
    const kakaoShareBtn = document.querySelector('.share-kakao');
    
    if (kakaoShareBtn) {
        kakaoShareBtn.addEventListener('click', function() {
            console.log('카카오톡 공유 버튼 클릭');
            
            // 현재 페이지 URL
            const currentUrl = window.location.href;
            
            // 카카오톡 공유 (모바일에서 작동)
            if (navigator.share) {
                navigator.share({
                    title: '맥퀸쌤 AI 챌린지',
                    text: 'AI를 배우고 싶다면? 21일간의 특별한 여정에 함께하세요!',
                    url: currentUrl
                }).then(() => {
                    console.log('공유 성공');
                }).catch(err => {
                    console.log('공유 취소:', err);
                });
            } else {
                // Web Share API 미지원 시 링크 복사
                console.log('Web Share API 미지원, 링크 복사로 대체');
                copyToClipboard(currentUrl);
            }
        });
    }
    
    // 링크 복사 버튼
    const linkCopyBtn = document.querySelector('.share-link');
    const copyToast = document.getElementById('copyToast');
    
    if (linkCopyBtn) {
        linkCopyBtn.addEventListener('click', function() {
            console.log('링크 복사 버튼 클릭');
            const currentUrl = window.location.href;
            copyToClipboard(currentUrl);
        });
    }
    
    // 클립보드 복사 함수
    function copyToClipboard(text) {
        console.log('클립보드 복사 시도:', text);
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                console.log('클립보드 복사 성공');
                showToast();
            }).catch(err => {
                console.error('클립보드 복사 실패:', err);
                fallbackCopyToClipboard(text);
            });
        } else {
            console.log('Clipboard API 미지원, fallback 사용');
            fallbackCopyToClipboard(text);
        }
    }
    
    // 구형 브라우저용 복사
    function fallbackCopyToClipboard(text) {
        console.log('fallback 복사 시도');
        
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                console.log('fallback 복사 성공');
                showToast();
            } else {
                console.error('fallback 복사 실패');
                alert('링크 복사에 실패했습니다.');
            }
        } catch (err) {
            console.error('fallback 복사 오류:', err);
            alert('링크 복사에 실패했습니다.');
        }
        
        document.body.removeChild(textArea);
    }
    
    // 토스트 메시지 표시
    function showToast() {
        console.log('토스트 메시지 표시');
        
        if (copyToast) {
            copyToast.classList.add('show');
            
            setTimeout(() => {
                copyToast.classList.remove('show');
                console.log('토스트 메시지 숨김');
            }, 3000);
        }
    }
    
    console.log('Section 9 초기화 완료');
}

/* ========================================
   방명록 기능 (Supabase)
======================================== */
// Supabase 설정
const SUPABASE_URL = 'https://iecyqoouugwxrrmugylo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllY3lxb291dWd3eHJybXVneWxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4Mjc3MjAsImV4cCI6MjA3NzQwMzcyMH0.DQvRJugzwiuI-1Fv3KJG-5al5C1ZhGwXko-kd2aF3og';

// Supabase 클라이언트 초기화
let supabaseClient;
try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('Supabase 클라이언트 초기화 성공');
} catch (error) {
    console.error('Supabase 초기화 실패:', error);
}

// 전역 변수
let currentPage = 0;
const messagesPerPage = 20;
let allMessagesLoaded = false;
let realtimeChannel = null;

// DOM 요소 (initGuestbook에서 초기화)
let guestbookForm, nicknameInput, messageInput, charCount, messagesGrid;
let loadingSpinner, loadMoreBtn, successToast, errorToast, messageCountSpan;

// 초기화 - DOMContentLoaded에서 실행
document.addEventListener('DOMContentLoaded', function() {
    guestbookForm = document.getElementById('guestbookForm');
    if (guestbookForm) {
        initGuestbook();
    }
});

function initGuestbook() {
    // DOM 요소 초기화
    nicknameInput = document.getElementById('nickname');
    messageInput = document.getElementById('message');
    charCount = document.getElementById('charCount');
    messagesGrid = document.getElementById('messagesGrid');
    loadingSpinner = document.getElementById('loadingSpinner');
    loadMoreBtn = document.getElementById('loadMoreBtn');
    successToast = document.getElementById('successToast');
    errorToast = document.getElementById('errorToast');
    messageCountSpan = document.getElementById('messageCount');
    
    console.log('방명록 초기화 시작, messagesGrid:', messagesGrid);
    
    // 글자 수 카운터
    if (messageInput) {
        messageInput.addEventListener('input', function() {
            charCount.textContent = this.value.length;
        });
    }
    
    // 폼 제출
    if (guestbookForm) {
        guestbookForm.addEventListener('submit', handleSubmit);
    }
    
    // 더보기 버튼
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreMessages);
    }
    
    // 초기 메시지 로드
    loadMessages();
    
    // 실시간 구독
    subscribeToMessages();
    
    // 전체 메시지 개수 로드
    updateMessageCount();
}

// 메시지 제출
async function handleSubmit(e) {
    e.preventDefault();
    
    if (!supabaseClient) {
        showToastMessage(errorToast, 'Supabase가 초기화되지 않았습니다.');
        return;
    }
    
    const nickname = nicknameInput.value.trim();
    const message = messageInput.value.trim();
    
    if (!nickname || !message) {
        showToastMessage(errorToast, '닉네임과 메시지를 모두 입력해주세요.');
        return;
    }
    
    // 버튼 비활성화
    const submitBtn = guestbookForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = '등록 중...';
    
    try {
        const { data, error } = await supabaseClient
            .from('guestbook')
            .insert([
                { 
                    nickname: nickname,
                    message: message 
                }
            ]);
        
        if (error) throw error;
        
        // 성공
        showToastMessage(successToast, '응원 메시지가 등록되었습니다!');
        guestbookForm.reset();
        charCount.textContent = '0';
        
        // 메시지 개수 업데이트
        updateMessageCount();
        
    } catch (error) {
        console.error('Error inserting message:', error);
        showToastMessage(errorToast, '오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = '응원 남기기 💌';
    }
}

// 메시지 로드
async function loadMessages(reset = true) {
    if (!supabaseClient) {
        console.error('Supabase 클라이언트가 초기화되지 않았습니다.');
        if (loadingSpinner) loadingSpinner.style.display = 'none';
        showEmptyState();
        return;
    }
    
    if (reset) {
        currentPage = 0;
        if (messagesGrid) messagesGrid.innerHTML = '';
        allMessagesLoaded = false;
    }
    
    if (loadingSpinner) loadingSpinner.style.display = 'block';
    
    try {
        const from = currentPage * messagesPerPage;
        const to = from + messagesPerPage - 1;
        
        const { data, error } = await supabaseClient
            .from('guestbook')
            .select('*')
            .eq('is_visible', true)
            .order('created_at', { ascending: false })
            .range(from, to);
        
        if (error) throw error;
        
        if (data.length === 0) {
            if (currentPage === 0) {
                showEmptyState();
            }
            allMessagesLoaded = true;
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        } else {
            data.forEach(message => {
                appendMessage(message);
            });
            
            currentPage++;
            
            // 더보기 버튼 표시 여부
            if (data.length < messagesPerPage) {
                allMessagesLoaded = true;
                if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            } else {
                if (loadMoreBtn) loadMoreBtn.style.display = 'block';
            }
        }
        
    } catch (error) {
        console.error('Error loading messages:', error);
        showToastMessage(errorToast, '메시지를 불러오는데 실패했습니다.');
    } finally {
        if (loadingSpinner) loadingSpinner.style.display = 'none';
    }
}

// 더 많은 메시지 로드
function loadMoreMessages() {
    if (!allMessagesLoaded) {
        loadMessages(false);
    }
}

// 메시지 카드 생성 및 추가
function appendMessage(message, prepend = false) {
    if (!messagesGrid) return;
    
    const card = document.createElement('div');
    card.className = 'message-card';
    card.dataset.id = message.id;
    
    const timeAgo = getTimeAgo(new Date(message.created_at));
    
    card.innerHTML = `
        <div class="message-header">
            <span class="message-nickname">${escapeHtml(message.nickname)}</span>
            <span class="message-time">${timeAgo}</span>
        </div>
        <p class="message-text">${escapeHtml(message.message)}</p>
    `;
    
    if (prepend) {
        messagesGrid.insertBefore(card, messagesGrid.firstChild);
    } else {
        messagesGrid.appendChild(card);
    }
}

// 실시간 구독
function subscribeToMessages() {
    if (!supabaseClient) return;
    
    // 기존 채널이 있으면 정리
    if (realtimeChannel) {
        supabaseClient.removeChannel(realtimeChannel);
    }
    
    realtimeChannel = supabase
        .channel('guestbook-changes')
        .on(
            'postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: 'guestbook'
            },
            (payload) => {
                // 새 메시지를 맨 위에 추가
                if (payload.new && payload.new.is_visible) {
                    appendMessage(payload.new, true);
                    updateMessageCount();
                }
            }
        )
        .subscribe();
}

// 전체 메시지 개수 업데이트
async function updateMessageCount() {
    if (!supabaseClient || !messageCountSpan) return;
    
    try {
        const { count, error } = await supabaseClient
            .from('guestbook')
            .select('*', { count: 'exact', head: true })
            .eq('is_visible', true);
        
        if (error) throw error;
        
        messageCountSpan.textContent = count || 0;
    } catch (error) {
        console.error('Error counting messages:', error);
    }
}

// 빈 상태 표시
function showEmptyState() {
    if (!messagesGrid) return;
    
    messagesGrid.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">💬</div>
            <p class="empty-state-text">아직 작성된 응원 메시지가 없습니다.<br>첫 번째 응원의 주인공이 되어주세요!</p>
        </div>
    `;
}

// 토스트 표시
function showToastMessage(toastElement, message) {
    if (!toastElement) return;
    
    if (message) {
        toastElement.textContent = message;
    }
    toastElement.classList.add('show');
    
    setTimeout(() => {
        toastElement.classList.remove('show');
    }, 3000);
}

// 시간 경과 표시 (상대 시간)
function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + '년 전';
    
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + '개월 전';
    
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + '일 전';
    
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + '시간 전';
    
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + '분 전';
    
    return '방금 전';
}

// HTML 이스케이프 (XSS 방지)
function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
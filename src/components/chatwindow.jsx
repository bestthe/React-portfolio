import React, { useState, useEffect, useRef } from 'react';
import '../styles/chatwindow.css';
import meImg from '../assets/me.png';
import { ArrowRight } from 'react-bootstrap-icons';

function ChatWindow({ isChat }) {
  const chatList = [
    {
      id: '1',
      question: '비전공자로서 웹 퍼블리셔를 준비하게 된 계기가 무엇인가요?',
      answer: `웹 퍼블리셔로 이직을 준비하기 이전에는 병원 원무과에서 근무했습니다.
                \n 업무를 하면서 안정적인 일상은 있었지만, 점점 제 성장이 멈춰 있다는 느낌을 받았습니다.
                \n 주어진 일을 반복하는 하루보다 <strong>새로운 것을 배우고, 스스로 발전할 수 있는 일</strong>을 하고 싶었습니다.
                \n 그때부터 이직을 위해 웹서칭을 하던 중 문득 '인터넷 사이트는 누가 만드는 걸까?'라는 궁금증이 생겨 <strong>웹 퍼블리셔라는 직업</strong>을 알게 되었습니다.
                \n 웹 퍼블리셔는 <strong>지속적으로 새로운 것을 배우고, 스스로 노력하며 발전할 수 있다는 점</strong>에서 매력을 느꼈습니다.
                \n 실제로 웹 퍼블리셔 자격증을 독학으로 취득하면서 더욱 흥미를 가지게 되었고, 본격적으로 웹 퍼블리셔를 준비하게 되었습니다. 
                `,
    },
    {
      id: '2',
      question: '이전 직장을 그만둔 후 1년 동안은 어떤 시간을 보내셨나요?',
      answer: `이전 직장에서는 다양한 브라우저 환경을 고려해야 했기 때문에 HTML, CSS와 jQuery를 중심으로 웹 퍼블리싱 업무를 수행했습니다.
            \n 퇴사 후에는 웹 개발 트랜드가 ES5 이후 <strong>JavaScript 중심</strong>으로 전환되고 있다는 사실을 확인하고 보다 범용적이고 현대적인 웹 개발 기술을 익히기 위해 독학으로 JavaScript를 학습했습니다.
            \n JavaScript를 활용해 <strong>포트폴리오를 제작</strong>하며 실력을 다진 후, 이력서를 제출하며 본격적으로 이직을 준비했습니다.
            \n 그 과정에서 채용 공고를 살펴보니 현대 웹 개발 환경에서 <strong>프론트엔드 경험을 갖춘 지원자</strong>를 선호한다는 점을 알게 되었고, 이에 React를 독학하여 <strong>React 기반 포트폴리오를 제작</strong>하였습니다.
            \n 이러한 과정을 통해 <strong>기존 기술을 현대 기술로 확장</strong>하고, 스스로 학습하며 프로젝트를 완성하는 능력을 키울 수 있었습니다.
            `,
    },
    {
      id: '3',
      question: '어떤 분야의 퍼블리싱을 주로 하시나요?',
      answer: `저는 이전 직장인 Cafe24 파트너사 특성상 <strong>쇼핑몰을 중심으로 퍼블리싱</strong>을 진행했습니다.
            \n 당시에는 주로 HTML, CSS, jQuery를 활용하여 <strong>UI/UX 고려한 레이아웃</strong>을 구현했습니다.
            \n 특히 쇼핑몰 특성상 모바일, 태블릿, 데스크톱 등 다양한 화면 환경에서도 사용자 경험이 최적화되도록 <strong>반응형 웹</strong> 개발에 집중했습니다.
            \n 최근에는 <strong>브라우저 호환성과 접근성</strong>의 중요성을 인지하고, 해당 부분에 신경을 쓰며 작업하고 있습니다.
            \n 또한, JavaScript와 React를 활용한 <strong>SPA(Single Page Application) 형태의 포트폴리오를 제작하며, 동적인 웹</strong> 콘텐츠를 구현하고 유지보수 경험을 쌓았습니다.
            `,
    },
    {
      id: '4',
      question: '반응형 웹은 어떤 방식으로 구현 하시나요?',
      answer: `반응형 웹은 다양한 화면 환경에서 <strong>사용자 경험을 최적화</strong>하는 것이 중요하다고 생각합니다.
            \n 주로 <strong>CSS FlexBox</strong>를 활용하여 레이아웃을 구성하고, Media Query를 사용해 화면 크기에 따라 요소의 크기와 배치를 유연하게 조정합니다.
            \n 이미지, 폰트, 버튼 등 UI 컴포넌트가 각 기기에서 적절하게 표시되도록 <strong>단위와 비율을 신경쓰며, 브라우저 호환성과 접근성</strong>도 함께 고려하여 테스트를 진행합니다.
            \n 최근에는 React를 활용한 SPA(Single Page Application) 환경에서도 이러한 반응형 구조를 적용하며, <strong>컴포넌트 단위로 재사용성과 유지보수성</strong>을 높이는 방식으로 구현하고 있습니다.
            `,
    },
    {
      id: '5',
      question: '코드 리뷰 경험이 있나요? 있다면 어떻게 진행되었나요?',
      answer: `이전 직장에서 프로젝트를 진행하면서 <strong>코드 리뷰를 자주 수행</strong>했습니다.
            \n 주로 진행했던 프로젝트는 타 솔루션에서 Cafe24 솔루션으로 디자인과 기능을 이전하는 작업이었는데, 이 과정에서 코드 리뷰가 매우 중요한 역할을 했습니다.
            \n 프로젝트를 진행할 때 타 솔루션에서 사용되는 모듈과 Cafe24에서 사용되는 모듈의 차이를 확인하고, 해당 기능이 <strong>Cafe24 환경에서 구현 가능한지 검토</strong>해야 했습니다.
            \n 이를 위해 <strong>타 솔루션의 코드와 모듈을 분석하고, Cafe24 모듈을 활용하여 어떻게 구현할지 설계하며, 그 과정에서 팀원들과 코드 리뷰를 통해 의견을 공유</strong>하고 개선점을 반영했습니다.
            \n 이러한 코드 리뷰 과정을 통해 프로젝트의 <strong>정확성과 효율성</strong>을 높이는 동시에, <strong>팀 내 개발 지식 공유와 협업 능력을 강화</strong>할 수 있었습니다.
            `,
    },
    {
      id: '6',
      question: 'GitHub를 활용한 버전 관리 경험이 있으신가요?',
      answer: `솔직하게 말씀드리자면, 이전 직장에 경우 Cafe24 솔루션 파트너사이기 때문에 GitHub를 활용한 버전 관리 경험은 없었습니다.
            \n 먼저, GitHub 버전관리는 작업을 진행하면서 커밋을 통해 변경 사항을 기록하고, 작업 중 발생한 오류를 커밋 히스토리를 통해 되돌리며 문제를 해결하는 과정이라고 이해하고 있습니다.
            \n 이전 직장에서도 실제 운영 중인 사이트의 레이아웃 수정, 기능 추가, 오류 수정 등의 업무를 수행했으며, 작업 시 실제 사이트에 문제가 발생하지 않도록 기존 디자인과 코드를 복사하여 복사본에서 작업 후 테스트를 진행하고, 문제가 없으면 실제 운영 사이트에 적용하는 방식으로 업무를 진행했습니다.
            \n 이 과정을 통해 <strong>GitHub 버전관리와 유사한 경험</strong>을 쌓았다고 생각합니다.
            \n 또한, GitHub 버전관리의 중요성을 깨닫고, 현재 진행 중인 React 기반 SPA(Single Page Application) 프로젝트에서는 <strong>GitHub에 지속적으로 커밋하며 버전 관리 경험</strong>을 쌓고 있습니다.
            `,
    },
    {
      id: '7',
      question:
        'JavaScript와 React를 독학으로 준비하셨는데, 어떤 방식으로 학습하셨으며 학습 과정에서 어려웠던 점은 무엇이었나요?',
      answer: `독학은 주로 <strong>유튜브 강의</strong> 영상과 <strong>구글링</strong>을 통해 진행했습니다.
              \n 강의를 단순히 보는 것에 그치지 않고, 강의에 나오는 코드와 내용을 직접 구상하며 구조를 이해하고 작성방식에 대한 숙련도를 높였습니다.
              \n 독학 과정에서 어려웠던 점은, 강의를 들으면서 이해가 되지 않는 부분이나 질문할 상대가 없다는 점과, 제가 학습한 내용이 어느 정도 숙지되었는지 판단하기 어렵다는 점이었습니다.
              \n 하지만 이러한 어려움을 <strong>구글링과 Chat GPT</strong>를 활용하여 해결했습니다.
              \n 이해되지 않는 부분에 대한 답을 찾아보고, 코드를 직접 작성하며 <strong>학습 정도를 확인하고 보완</strong>하는 방식으로 독학을 이어갔습니다.`,
    },
    {
      id: '8',
      question: '향후 목표나 개발자로서의 비전은 무엇인가요?',
      answer: `저의 향후 목표는 프론트엔드 개발 역량을 꾸준히 강화하고, <strong>사용자 경험</strong>을 최우선으로 고려하는 개발자가 되는 것입니다.
              \n 단기적으로는 React를 심화 학습하고, <strong>Sass</strong>와 <strong>CSS 관련 기술</strong>, JavaScript의 최신 문법(ES6+)과 <strong>TypeScript</strong>까지 활용하여 효율적이고 재사용 가능한 컴포넌트를 설계하고 구현하는 경험을 쌓는 것을 목표로 하고 있습니다.
              \n 중장기적으로는 팀 프로젝트와 협업 경험을 확대하여, <strong>성능 최적화</strong>, <strong>접근성 고려</strong> 등 전체 웹 개발 과정에 대한 이해를 갖춘 프론트엔드 전문 개발자로 성장하고자 합니다.
              \n 또한, 새로운 기술 트렌드에 항상 관심을 가지고 학습하며, 변화하는 웹 환경에서도 <strong>안정적이고 직관적인 사용자 경험</strong>을 제공할 수 있는 개발자가 되는 것을 비전으로 삼고 있습니다.`,
    },
    {
      id: '9',
      question: 'Git, Figma, Notion 링크리스트',
      answer: `
        <a href="https://github.com/bestthe" target="_blank"  rel="noopener noreferrer">GitHub 바로가기</a><a href="https://www.figma.com/design/q4O8J89QoWB5B024fyXWgE/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%95%88?node-id=0-1&t=e71X8sNPGjAnBZaz-1" target="_blank"  rel="noopener noreferrer">Figma 디자인 시안 미리보기</a><a href="https://www.notion.so/29bedab835e080b495abebab29262c20?source=copy_link" target="_blank"  rel="noopener noreferrer">Notion 이력서 바로가기</a>
      `,
    },
  ];

  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  const initializedRef = useRef(false);
  const initialDoneRef = useRef(false);
  const timerRef = useRef(null);

  const scrollToBottom = () => {
    if (bottomRef.current)
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const clearTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    if (!isChat) {
      return () => {
        clearTimer();
      };
    }

    if (initializedRef.current && initialDoneRef.current) {
      setMessages((prev) => prev.filter((m) => m.type !== 'loading'));
      return () => {
        clearTimer();
      };
    }

    if (initializedRef.current && !initialDoneRef.current) {
      clearTimer();

      setMessages([{ from: 'system', type: 'loading' }]);

      timerRef.current = setTimeout(() => {
        setMessages([{ from: 'system', type: 'questionList' }]);
        initialDoneRef.current = true;
        timerRef.current = null;
      }, 2000);

      return () => {
        clearTimer();
      };
    }

    initializedRef.current = true;
    initialDoneRef.current = false;

    setMessages([{ from: 'system', type: 'loading' }]);

    timerRef.current = setTimeout(() => {
      setMessages([{ from: 'system', type: 'questionList' }]);
      initialDoneRef.current = true;
      timerRef.current = null;
    }, 2000);

    return () => {
      clearTimer();
    };
  }, [isChat]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuestionClick = (item) => {
    setMessages((prev) => [
      ...prev,
      { from: 'user', type: 'text', text: item.question },
      { from: 'bot', type: 'loading' },
    ]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev.filter((msg) => msg.type !== 'loading'),
        { from: 'bot', type: 'text', text: item.answer, showReset: true },
      ]);
    }, 2000);
  };

  const handleReset = () => {
    setMessages((prev) => [...prev, { from: 'system', type: 'questionList' }]);
  };

  const renderMessage = (msg, idx) => {
    if (msg.type === 'loading') {
      return (
        <div key={idx} className="loding_animation">
          <div className="animate1"></div>
          <div className="animate2"></div>
          <div className="animate3"></div>
        </div>
      );
    }

    if (msg.type === 'questionList') {
      return (
        <div key={idx} className="chat_first">
          <p>
            안녕하세요.
            <br />웹 퍼블리셔 <span className="text_bold">박현수</span> 입니다.
            <br />
            <br />
            하단에 궁금해하실 수 있는 몇 가지 질문을 미리 준비해두었습니다.
            <br />
            <br />
            <span className="text_bold">
              확인하고 싶으신 내용을 선택하시면 빠르게 답변드리겠습니다.
            </span>
            <br />
            <br />
            감사합니다 😄
          </p>
          <ul className="question_list">
            {chatList.map((item) => (
              <li key={item.id} className="questions">
                <button type="button" onClick={() => handleQuestionClick(item)}>
                  {item.question}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <div
        key={idx}
        className={`bubble ${msg.from === 'user' ? 'mine' : 'bot'}`}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: msg.text.replace(/\n/g, '<br />'),
          }}
        />
        {msg.showReset && (
          <button className="back_to_start" onClick={handleReset}>
            처음으로 돌아가기 <ArrowRight size={15} />
          </button>
        )}
      </div>
    );
  };

  return (
    <div id="chat_layout" className={`${isChat && 'chatOn'}`}>
      <div className="chat_header">
        <h2>
          <img src={meImg} alt="나를 대신하는 캐릭터이미지" />
        </h2>
        <div className="chat_title">
          <div className="chat_maint">
            <h3>박현수</h3>
            <div className="circle"></div>
            <div className="circle_animation"></div>
          </div>
          <p className="chat_subt">궁금하신 점이 있으신가요?</p>
        </div>
      </div>

      <div className="chat_body">{messages.map(renderMessage)}</div>
      <div ref={bottomRef}></div>
    </div>
  );
}

export default ChatWindow;

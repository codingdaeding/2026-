document.addEventListener("DOMContentLoaded", function () {
  // 최상단 html 태그를 기준으로 설정하여 깜빡임을 완벽 차단합니다.
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");

  // 초기 버튼 텍스트 정렬
  if (root.classList.contains("dark-mode")) {
    if (themeToggle) themeToggle.textContent = "라이트 모드";
  } else {
    if (themeToggle) themeToggle.textContent = "다크 모드";
  }

  // 테마 토글 버튼 클릭 핸들러
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      root.classList.toggle("dark-mode");

      if (root.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "라이트 모드";
      } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "다크 모드";
      }
    });
  }

  // 카드 클릭 시 선택 효과 
  const cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      card.classList.toggle("active-card");
    });
  });

  // 연락처 페이지 폼 검증 
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      let result = document.getElementById("formResult");
      if (!result) {
        result = document.createElement("p");
        result.id = "formResult";
        result.className = "form-result";
        form.appendChild(result);
      }

      if (name === "" || email === "" || message === "") {
        result.textContent = "이름, 이메일, 메시지를 모두 입력하세요.";
        result.classList.remove("success");
        result.classList.add("error");
        return;
      }

      result.textContent = name + "님, 문의 내용이 확인되었습니다. 실제 전송 기능은 서버 연결 후 구현할 수 있습니다.";
      result.classList.remove("error");
      result.classList.add("success");
      form.reset();
    });
  }

  // 맨 위로 이동 버튼 
  const toTop = document.getElementById("toTop");
  if (toTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        toTop.classList.add("show");
      } else {
        toTop.classList.remove("show");
      }
    });

    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
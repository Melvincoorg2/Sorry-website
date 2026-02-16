
const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGrp = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I'm SORRY";
  gif.src = "images/sorry.png";
  gif.style.height = "300px"; 
gif.style.width = "400px"; 
  noBtn.innerHTML = "Muchkand ogu";
  yesBtn.innerHTML = "Haaa";

  yesBtn.addEventListener("click", () => {
    question.innerHTML = "Hehehe!! Matte mistake madalla ";
    gif.src = "images/love.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  })

  noBtn.addEventListener("click", () => {
    question.innerHTML = "Please anu!!!, Im really sorry";
    gif.src = "images/download.gif";
    yesBtn.innerHTML = "Hucha";
    noBtn.innerHTML = "Sai idc";

    yesBtn.addEventListener("click", () => {
      question.innerHTML = "Nanu perfect alla adru Nina kushi agi irake try madtini";
      gif.src = "images/love.gif";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    })

    noBtn.addEventListener("click", () => {
      question.innerHTML = "";
      gif.src = "images/sadlife.gif";
      yesBtn.innerHTML = "accept na anu";
      noBtn.innerHTML = "no";

      yesBtn.addEventListener("click", () => {
        question.innerHTML = "Thanks anu, I wont let the glass break , I'll cover whole surrounding bu cotton so it wont break anu";
        gif.src = "images/love.gif";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
      });

      noBtn.addEventListener("click", () => {
        question.innerHTML = "I know i upset you sometimes because of my words or saying without thinking, But i never want u to feel Hurt , Its really not my intention to hurt you , I want u to be happy anu, I am really sorry for before";
        gif.src = "images/run.gif";
        yesBtn.innerHTML = "mucho";
        noBtn.innerHTML = "Hu okay";

        noBtn.addEventListener("click", () => {
          question.innerHTML = "Thanks Anu...";
          gif.src = "images/love.gif";
          yesBtn.style.display = "none";
          noBtn.style.display = "none";
        })
        // Hover effect for the "yes" button
        yesBtn.addEventListener("mouseover", () => {
          const yesBtnRect = yesBtn.getBoundingClientRect();
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
          const margin = 50; // Margin from each side
        
          // Calculate maximum available space for the button
          const maxX = screenWidth - yesBtnRect.width - margin * 2; // Considering margin on both sides
          const maxY = screenHeight - yesBtnRect.height - margin * 2; // Considering margin on both sides
        
          // Generate random position within the available space
          const randomX = Math.max(margin, Math.floor(Math.random() * maxX)) + margin; // Add margin to X position
          const randomY = Math.max(margin, Math.floor(Math.random() * maxY)) + margin; // Add margin to Y position
        
          yesBtn.style.left = randomX + "px";
          yesBtn.style.top = randomY + "px";
        });
        
        
      });
    });
  });
});





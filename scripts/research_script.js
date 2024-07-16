const daysTag = document.querySelector(".research-days"),
currentDate = document.querySelector(".research-current-date"),
prevNextIcon = document.querySelectorAll(".research-icons span"),
dayDetails = document.getElementById("day-details"),
dayDescription = document.getElementById("day-description");

// Custom content for each day
const dayContents = {
    "2024-06-27": `
        <p>Read MLIR: A Compiler Infrastructure for the End of Moore's Law<br>
        Read High Performance Code Generation in MLIR: An Early Case Study with GEMM</p>
    `,
    "2024-06-28": `
        <p>Read MOM: Matrix Operations in MLIR <br>
        Read Compiler Support for Sparse Tensor in MLI</p>
    `,
    "2024-06-29": `
        <p>Read Matrix Inversion Using Cholesky Decomposition <br>
        Read Abstraction Raising in MLIR</p>
    `,
    "2024-06-30": `
        <p> Read LoRA: Low-Rank Adaptation of Large Language Models</p>
    `,
    "2024-07-01": `
        <p> Read LoraHub: Efficient Cross-Task Generalization via Dynamic LoRA Composition</p>
    `,
    "2024-07-02": `
        <p>Read Attention is All You Need <br>
        Read BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding</p>
    `,
    "2024-07-03": `
        <p>Read RoBERTa: A Robustly Optimized BERT Pretraining Approach
        <br>Read Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity
        </p>
    `,
    "2024-07-04": `
        <p>July 4!</p>
    `,
    "2024-07-05": `
        <p>Read Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks
        <br>Read Language Models are Unsupervised Multitask Learners</p>
    `,
    "2024-07-06": `
        <p>Created this Website! I learned some HTML and CSS in the process.</p>
    `,
    "2024-07-07": `
        <p>Created this Website!</p>
    `,
    "2024-07-08": `
        <p>Improved my Skills with Pandas and Scikit-learn</p>
    `,
    "2024-07-09": `
        <p>Improved my Skills with Pandas and Scikit-learn</p>
    `,
    "2024-07-10": `
        <p>Read Long Short-Term Memory 
        <br>Read Extended Long Short-Term Memory<p>
    `,
    "2024-07-11": `
        <p>Read A Random Forest Guided Tour<p>
    `,
    "2024-07-12": `
        <p> Competing at "RowFest" Summer Nationals <p>
    `,
    "2024-07-13": `
        <p> Competing at "RowFest" Summer Nationals <p>
    `,
    "2024-07-14": `
        <p> Competing at "RowFest" Summer Nationals <p>
    `,
    "2024-07-15": `
        <p> Competing at "RowFest" Summer Nationals <p>
    `,
    "2024-07-16": `
        <p> Read Mapping the Mind of a Large Language Model <p>
    `,
    "2024-07-17": `
        <p> Read How Powerful are Graph Neural Networks? <p>
    `,
    "2024-07-18": `
        <p> Read Understanding Deep Learning Requires Rethinking Generalization <br>
            Read Probable Networks and Plausible Predictions -- A Review of Practical Bayesian Methods for Supervised Neural Networks<p>
    `,
    "2024-07-19": `
        <p> Read Rules of Machine Learning: Best Practices for ML Engineering <p>
    `,
    "2024-07-20": `
        <p> Read Understanding Contrastive Representation Learning through Alignment and Uniformity on the Hypersphere <br>
            Read Auto-Encoding Variational Bayes<p>
    `,
    "2024-07-21": `
        <p> Read Scaling Laws for Neural Language Models<p>
    `,

};


// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}" data-date="${i}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;

    // Add click event listeners to the days

    const cutoffDate = new Date('2024-07-22');


    document.querySelectorAll('.research-days li').forEach(day => {
        day.addEventListener('click', () => {
            let clickedMonth = currMonth;
            let clickedYear = currYear;
            let clickedDate = parseInt(day.textContent);
    
            // Adjust for previous month
            if (day.classList.contains('inactive')) {
                if (clickedDate > 20) {
                    // Previous month
                    clickedMonth--;
                    if (clickedMonth < 0) {
                        clickedMonth = 11;
                        clickedYear--;
                    }
                } else {
                    // Next month
                    clickedMonth++;
                    if (clickedMonth > 11) {
                        clickedMonth = 0;
                        clickedYear++;
                    }
                }
            }
    
            const selectedDate = `${clickedYear}-${String(clickedMonth + 1).padStart(2, '0')}-${String(clickedDate).padStart(2, '0')}`;
            const clickedFullDate = new Date(clickedYear, clickedMonth, clickedDate);
    
            let content;
            if (clickedFullDate > cutoffDate) {
                content = '<p>To Be Decided!</p>';
            } else {
                content = dayContents[selectedDate] || `<p>No details available for ${months[clickedMonth]} ${clickedDate}, ${clickedYear}</p>`;
            }
    
            dayDescription.innerHTML = content;
            dayDetails.style.display = 'block';
        });
    });
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});

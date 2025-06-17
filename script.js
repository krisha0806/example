document.getElementById("gradeForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const s1 = parseFloat(document.getElementById("subject1").value);
    const s2 = parseFloat(document.getElementById("subject2").value);
    const s3 = parseFloat(document.getElementById("subject3").value);
  
    const total = s1 + s2 + s3;
    const average = total / 3;
  
    let grade = "";
  
    if (average >= 90) grade = "A";
    else if (average >= 75) grade = "B";
    else if (average >= 60) grade = "C";
    else if (average >= 40) grade = "D";
    else grade = "F";
  
    document.getElementById("result").innerHTML = `
      <p>Name: ${name}</p>
      <p>Total: ${total}</p>
      <p>Average: ${average.toFixed(2)}</p>
      <p>Grade: <strong>${grade}</strong></p>
    `;
  });
  
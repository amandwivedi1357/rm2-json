const signupBtn = document.querySelector(".signupBtn")
const loginBtn = document.querySelector(".LoginBtn")
const moveBtn = document.querySelector(".moveBtn")
const signup = document.querySelector(".signup")
const login = document.querySelector(".login")

loginBtn.addEventListener("click",()=>{
    moveBtn.classList.add("rightBtn")
    login.classList.add("loginForm")
    signup.classList.remove("signupForm")
    moveBtn.innerHTML="Login"
})
signupBtn.addEventListener("click",()=>{
    moveBtn.classList.remove("rightBtn")
    login.classList.remove("loginForm")
    signup.classList.add("signupForm")
    moveBtn.innerHTML="Signup"

})

// Function to handle login form submission
function loginn(event) {
    event.preventDefault(); // Prevent form from submitting
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Check if user is admin
    if (email === "eve.holt@reqres.in") {
      // Send login request to reqres API
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => {
          if (response.ok) {
            // Redirect to admin dashboard
            window.location.href = "/admin.html";
          } else {
            // Show error message
            alert("Login failed");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("An error occurred while logging in");
        });
    } else {
      // User login
      // Check if user exists in JSON server
      fetch("http://localhost:3000/users?email=" + email)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0 && data[0].password === password) {
            // Login successful
            alert("Login successful");
  
            // Redirect to hotels page
            window.location.href = "/hotels.html";
          } else {
            // Login failed
            alert("Login failed");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("An error occurred while logging in");
        });
    }
  }
  
  // Add event listener to login form
  document.querySelector(".login").addEventListener("submit", login);
  

 async function Signupp(){
    
    const id = document.getElementById("id").value
    const username = document.getElementById("username").value;
    const email = document.getElementById("useremail").value
    const password = document.getElementById("userpassword").value


    const data_to_send = {
        id,username,email,password
    }
    let res = await fetch(`http://localhost:3000/users`,{
        method:"POST",
            body:JSON.stringify(data_to_send),
            headers:{
                "Content-Type":"application/json"
            }
        
    })
    let data = await res.json();
    console.log(data)

  }
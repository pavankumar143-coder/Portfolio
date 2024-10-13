
    document.addEventListener('DOMContentLoaded', function() {
    const whoareuPopup = document.getElementById('whoareu-popup');
    const whoareuBio = document.getElementById('whoareu-bio');
    const closeWhoAreUPopup = document.getElementById('close-whoareu-popup');

    // Automatically show the popup when the about.html page is loaded
    showWhoAreUPopup();

    // Close the popup when the user clicks the 'Close' button
    closeWhoAreUPopup.addEventListener('click', function() {
        whoareuPopup.classList.remove('whoareu-popup-active');
    });

    // Function to show the whoareu popup with typing effect
    function showWhoAreUPopup() {
        // Clear any existing bio text
        whoareuBio.innerHTML = '';
        
        // Show the popup
        whoareuPopup.classList.add('whoareu-popup-active');

        // Text to be displayed with typing effect
        const bioText = `
        Pavan Kumar Tule
        Certified Ethical Hacker | Penetration Tester at Hackerbook
        I am Pavan Kumar Tule, a Certified Ethical Hacker (CEH) with a strong foundation in Vulnerability Assessment and Penetration Testing (VAPT). 
        Currently, I serve as a Penetration Tester at Hackerbook, where I specialize in identifying, assessing, and mitigating security vulnerabilities 
        in complex systems and networks. My role extends to Security Information and Event Management (SIEM), where I leverage data-driven insights 
        to detect and respond to emerging threats.
        In addition to my professional work, I actively engage in bug bounty hunting, applying advanced exploitation techniques to discover critical 
        vulnerabilities in real-world applications. My experience spans multiple domains, including web applications, networks, and cloud environments, 
        consistently aiming to enhance security posture and minimize risk exposure for organizations.
        `;

        // Call function to type out the bio text slowly
        typeTextSlowly("whoareu-bio", bioText, 50);
    }

    // Function to type text slowly in the popup
    function typeTextSlowly(elementId, text, speed) {
        let i = 0;
        const element = document.getElementById(elementId);
        function typeWriter() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);  // Control the typing speed
            }
        }
        typeWriter();
    }
  });
  setTimeout(function() {
    showWhoAreUPopup();
}, 2000); // 2000ms = 2 seconds delay



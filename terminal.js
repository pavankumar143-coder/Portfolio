document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('terminal-input-field');
    const outputDiv = document.getElementById('terminal-output');
    const terminal = document.getElementById('terminal');
    const popup = document.getElementById('popup-message');
    const closePopup = document.getElementById('close-popup');
    const minimizeButton = document.getElementById('minimize-terminal');
    const whoareuPopup = document.getElementById('whoareu-popup'); // Popup for whoareu
    const whoareuBio = document.getElementById('whoareu-bio'); // Bio section in popup

    // Show pop-up on page load
    popup.style.display = 'flex';

    // Close pop-up when user clicks 'Got it!'
    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
        terminal.style.display = 'block'; // Show terminal after popup is closed
    });

    // Minimize or Maximize Terminal
    minimizeButton.addEventListener('click', function() {
        terminal.classList.toggle('minimized');
    });

    // Available commands and functionality
    const terminalCommands = {
        'cd ..': navigateBack,           // Go back to previous page
        'whoareu': showWhoAreUPopup,     // Show user photo and bio in popup
        'whoami': showWhoAreUPopup,      // Alias for whoareu
        'ls': listDirectories,           // List available pages with navigation
        'help': showHelp,                // Display help text
        'greet': greetUser,              // Greet the user
        'color red': changeColorRed,     // Change terminal text color to red
        'clear': clearTerminal           // Clear terminal output
    };

    // Listen for Enter key press in the terminal input field
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const command = inputField.value.trim();
            outputDiv.innerHTML += `<div>@root$PavanKumarTule# ${command}</div>`;
            inputField.value = '';  // Clear the input field
            
            // Execute command if it exists, otherwise show error
            if (terminalCommands[command]) {
                terminalCommands[command]();
            } else if (command.includes('.html')) {
                // Navigate to the page if the command is a page (e.g., index.html)
                navigateToPage(command);
            } else {
                outputDiv.innerHTML += `<div>Unknown command: ${command}. Type 'help' for a list of available commands.</div>`;
            }

            // Auto-scroll to the bottom of the terminal output
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
    });

    // Function to show the popup when the 'whoareu' command is entered
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

    // Function to navigate back to the previous page
    function navigateBack() {
        window.history.back();
    }

    // Function to list available pages (similar to 'ls' command in Linux)
    function listDirectories() {
        const directories = `
        <div>
            <span>./index.html</span> - Home Page<br>
            <span>./about.html</span> - About Me Page<br>
            <span>./contact.html</span> - Contact Page<br>
        </div>
        <div>Type the name of the page (e.g., 'index.html') to navigate.</div>`;
        outputDiv.innerHTML += directories;
    }

    // Function to show help message with available commands
    function showHelp() {
        const helpText = `
        <div>
            Available commands: <br>
            cd .. - Go back to the previous page <br>
            whoareu - It will Display Complete Bio of mine in popup <br>
            whoami - Alias for whoareu <br>
            ls - List available pages and navigate <br>
            greet - Greet the user <br>
            color red - Change terminal text color to red <br>
            clear - Clear the terminal output <br>
            help - Show this help message
        </div>`;
        outputDiv.innerHTML += helpText;
    }

    // Function to greet the user
    function greetUser() {
        outputDiv.innerHTML += `<div>Hello, Pavan! Welcome to your personal terminal!</div>`;
    }

    // Function to change the terminal text color to red
    function changeColorRed() {
        document.getElementById('terminal').style.color = 'red';
    }

    // Function to clear the terminal output
    function clearTerminal() {
        outputDiv.innerHTML = '';
    }

    // Function to navigate to a specific page
    function navigateToPage(page) {
        // Check if the page exists, then redirect
        if (['index.html', 'about.html', 'contact.html'].includes(page)) {
            window.location.href = `./${page}`;
        } else {
            outputDiv.innerHTML += `<div>Page not found: ${page}</div>`;
        }
    }
    const closeWhoAreUPopup = document.getElementById('close-whoareu-popup');
       closeWhoAreUPopup.addEventListener('click', function() {
        whoareuPopup.classList.remove('whoareu-popup-active');
}); });



.led {
  width: 20px; /* Adjust based on your grid size */
  height: 20px;
  margin: 1px;
  background-color: black; /* LED color */
  border-radius: 0; /* Square shape */
  box-shadow: 0 0 10px black; /* Add a glowing effect */
  transition: background-color 0.3s;
  display: inline-block;
  opacity: 100;
}

.led.on {
  background-color: red; /* On state color */
  box-shadow: 0 0 10px red; /* Enhance the glow */
  
}

@keyframes scroll {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

.scroll-container {
  white-space: nowrap;
  overflow: hidden;
  animation: scroll 5s linear infinite; /* Decrease the duration for faster scrolling */
}


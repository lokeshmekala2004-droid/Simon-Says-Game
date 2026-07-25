# Simon-Says-Game
# 🎮 Simon Says Game  A fun and interactive memory game built using **HTML, CSS, and JavaScript**. The game generates a sequence of colored buttons, and the player must repeat the sequence correctly. With each level, the sequence becomes longer, making the game more challenging.  ---
## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Local Storage API

---
## 🎮 How to Play

1. Open the game in your browser.
2. Press **Enter** (Desktop) or tap anywhere (Mobile) to start.
3. Watch the flashing color sequence.
4. Repeat the sequence by clicking the colored buttons.
5. Every correct level adds one more color.
6. If you click the wrong button, the game ends.
7. Try to beat your highest score!

---

## 🎲 Game Rules

- The game starts with one random color.
- Repeat the exact sequence.
- Each new level adds one random color.
- A wrong click ends the game.
- Highest score is automatically saved.

---

## 🧠 Game Logic

### Start Game
- Detects **Enter** key or mobile tap.
- Starts the first level.

### Generate Sequence
- Randomly selects one color.
- Adds it to the game sequence.

### Show Sequence
- Replays the complete sequence with button flash animations.

### User Input
- Stores every button clicked by the player.
- Compares it with the game's sequence.

### Correct Answer
- Moves to the next level after a short delay.

### Wrong Answer
- Displays Game Over message.
- Vibrates the phone (if supported).
- Flashes the screen red.
- Saves the highest score.
- Resets the game.

---

## 📸 Screenshots

<img width="897" height="515" alt="home" src="https://github.com/user-attachments/assets/5c839602-3807-491f-b53d-7c148a732f00" />

<img width="902" height="517" alt="gameplay" src="https://github.com/user-attachments/assets/0c82e2c6-ee4d-4a5b-9244-48c26a2a7b07" />

<img width="919" height="523" alt="gameover" src="https://github.com/user-attachments/assets/f454af1e-7ce4-4137-a1f1-3d3ed4536a9b" />

Example:

```
screenshots/
│── home.png
│── gameplay.png
│── gameover.png
```

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Lokesh**

Made with ❤️ using HTML, CSS, and JavaScript.

---
⭐ If you enjoyed this project, don't forget to **Star** the repository!

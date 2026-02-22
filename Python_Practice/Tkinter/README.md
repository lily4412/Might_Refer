# Tkinter Demo Project

A simple GUI demonstration built with Python and Tkinter.

## Getting Started

Follow these steps to run the project in Visual Studio Code:

### Instructions to Set Up Tkinter:

Make sure Python is installed on your system. You can optionally create a virtual environment. Tkinter is usually included with Python by default. Open the `test.py` file in VS Code.

### Running the Application:

Open the terminal in VS Code and run the following command:

```bash
python test.py
```

This will launch the Tkinter demo GUI with two labels displayed.

## Key Commands / Concepts Used

1. **Import Tkinter**  
This imports all Tkinter functions and classes so you can create GUI elements.

```python
from tkinter import *
```

2. **Create Main Window**  
Initializes the main application window where all GUI components will appear.

```python
root = Tk()
```

3. **Create Label Widgets**  
Creates text labels to display messages in the GUI.

```python
myLabel1 = Label(root, text="Hello World!")
myLabel2 = Label(root, text="My name is Lily!")
```

4. **Add Labels to Window (Layout)**  
Places the labels in specific rows and columns using the grid layout system.

```python
myLabel1.grid(row=0, column=0)
myLabel2.grid(row=1, column=5)
```

5. **Run the GUI**  
Starts the Tkinter event loop, keeping the window open and responsive.

```python
root.mainloop()
```

## Project Structure

```
Tkinter_Demo/
├── test.py           # Main Tkinter demo file
└── README.md         # Project instructions and description
```

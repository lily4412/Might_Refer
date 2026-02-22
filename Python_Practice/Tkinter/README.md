## Tkinter Demo Project Summary

This project demonstrates a simple GUI using Python's **Tkinter** library.

### Key Commands / Concepts Used

1. **Import Tkinter**  
   - Imports all Tkinter functions and classes to create GUI elements.

```python
from tkinter import *


2. **Create Main Window**

   * Initializes the main application window.

```python
root = Tk()
```

3. **Create Label Widgets**

   * Creates text labels to display in the GUI.

```python
myLabel1 = Label(root, text="Hello World!")
myLabel2 = Label(root, text="My name is Lily!")
```

4. **Add Labels to Window (Layout)**

   * Places the labels in specific rows and columns using **grid layout**.

```python
myLabel1.grid(row=0, column=0)
myLabel2.grid(row=1, column=5)
```

5. **Run the GUI**

   * Starts the Tkinter event loop, keeping the window open and responsive.

```python
root.mainloop()
```

### Notes

* To run this file in VS Code, use the following command:

```bash
python test.py
```

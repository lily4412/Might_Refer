## Tkinter Demo Project Summary

This project demonstrates a simple GUI using Python's **Tkinter** library.

### Key Commands / Concepts Used

1. **Import Tkinter**
```python
from tkinter import *
````

* Imports all Tkinter functions and classes to create GUI elements.

2. **Create Main Window**

```python
root = Tk()
```

* Initializes the main application window.

3. **Create Label Widgets**

```python
myLabel1 = Label(root, text="Hello World!")
myLabel2 = Label(root, text="My name is Lily!")
```

* Creates text labels to display in the GUI.

4. **Add Labels to Window (Layout)**

```python
myLabel1.grid(row=0, column=0)
myLabel2.grid(row=1, column=5)
```

* Places the labels in specific rows and columns using **grid layout**.

5. **Run the GUI**

```python
root.mainloop()
```

### Notes

Use this below command to run in VSCode

```bash
python test.py
```

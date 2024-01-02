# xpanel-custom-dpi https://xpanel.finalmouse.com/

## Why this works

Finalmouse utilises packets sent between the website and mouse to communicate and update information. With both the dpi and polling rate, it converts the string value to a numerical value which it then wraps into a packet and sends it to the mouse so if we alter the initial string, it will alter what information the packet sends.

## Custom DPI
video showcase: https://streamable.com/qiqa52

1. Proceed to https://xpanel.finalmouse.com/dpi
2. Press "Ctrl + Shift + I) and go to the sources tab:

![image](https://github.com/red0x0002/xpanel-custom-dpi/assets/93785137/eb88eaca-2072-4640-ba03-a3ab6b93fee5)

3. Open the following folders: xpanel.finalmouse.com -> _next -> static -> chunks -> app -> dpi

![image](https://github.com/red0x0002/xpanel-custom-dpi/assets/93785137/07439944-ea01-4fed-ba43-79f57f53053a)

4. Click on page-INSTANCEID.js in the dpi folder as seen above - INSTANCEID is just random numbers
5. "Ctrl + F" and search for: ["400", "800", "1600", "3200", "6400"]

![image](https://github.com/red0x0002/xpanel-custom-dpi/assets/93785137/b0d75304-2a01-4317-a996-b421a192dcce)

6. You can now simply overwrite any of the values within range the of 25600 (it must be below 25600) and then refresh the page and click on the new dpi value

![image](https://github.com/red0x0002/xpanel-custom-dpi/assets/93785137/f65cc914-cfa4-4aa8-8367-6dc0df4d568e)

7. Voila:

![image](https://github.com/red0x0002/xpanel-custom-dpi/assets/93785137/126c692c-76a1-4c0f-bc48-df880b2de3d1)

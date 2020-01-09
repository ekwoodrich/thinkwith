import fontforge
F = fontforge.open("MaterialCommunityIcons.ttf.ttf")
for name in F:
    filename = name + ".png"
    print(name)
    F[name].export(filename, 256)     # set height to 600 pixels

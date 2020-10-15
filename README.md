# lab-13-user-adventure

# Fairy Gem Search

## Adventure Outline:
### 1. User goes to Intro page

1. User selects Options:
    1. User reads Intro text
    1. Enter Name
    1. Pick Species
        1. Dwarf
        1. Elf
        1. Halfling
    1. Pick Item
        1. Compass (don't get lost / -1 days lost)
        1. Shield (don't get hurt / -1 injury)
        1. Torch (help find gems / +1 gem)
1. User submits Options:
    1. User is moved to Map page 

### 2. User goes to Map page
1. User selects one Quest:
    1. Forest
    2. Volcano
    3. Lake/Desert
1. User is moved to Quest page

### 3. User goes to Quest page
1. User reads Description text
1. User makes choice
1. Results affect user State
1. User moved to Map Page

### 4. User goes on Quests until:
1. User dies
1. User runs out of time
1. User returns home
1. User collects enough (5?) gems

### 5. User sent to Results page
1. User shown Resutls:
    1. Background image is Happy or Sad
    1. Is the farm saved?
    1. Final hp
    1. Total gems
        1. Great job! (8-10 gems)
        1. Decent job! (5-7 gems)
        1. Too bad. (less than 5 gems)

## Code Planning:

### 1. Create files & folders:
1. Intro page:
    1. index.html
    1. home.css
    1. app.js
1. Map folder
    1. index.hmtl
    1. map.css
    1. map.js
1. Quest folder
    1. data.js
    1. index.html
    1. quest.css
    1. quest.js
1. Results folder
    1. index.html
    1. results.css
    1. results.js

### 2. Intro page (part 1)
1. Header: name of Game
1. Main: content (intro text)
1. Form (in app.js)
    1. Name input
    1. Species input
    1. Tool input
    1. Button ('submit')
    1. use e.Default thing
1. Render form
    1. Console.log form
1. Connect button to form
    1. Console.log to see if button is connected/works
1. Connect form to local storage
    1. Check if data is moved to local storage
1. User state:
    1. HP remaining
    1. Days remaining
    1. Gems collected (by color)

### 3. Map page (part 1)
1. User data (State) in Header
1. Background image: Map
1. 3 links in div go to Quest page
    1. Forest link
    1. Volcano link
    1. Lake/Desert link
1. Connect links to searchParam

### 4. Quest page (part 1)
1. User data (State) in Header
1. Background image: (based on quest)
1. Div:
    1. Quest info
        1. <p\> element
    1. Quest choices
        1. radio buttons
            1. All with same "name"
    1. Submit button
        1. Connect button in js
1. Update user data
1. Return user to Map page

### 5. Results page (part 1)
1. User data (State) in Header
1. Background image: (happy or sad)
1. Div:
    1. Results text based on:
        1. Health
        1. Gems collected
1. Button: Play Again!

### 6. Map page (part 2)
1. User data (State) in Header
1. Map page checks END conditions:
    1. User hp <= 0
    1. Days remaining <= 0
    1. Complete quests
1. Map will:
    1. Disable completed quest(s)
    1. Move user to Results page if one END condition is met
1. Repeat Map page untl END condition is met

### 7. Misc
1. Code ideas for items
    1. Compass prevents Days being increased from being lost
    1. Shield reduces damage by 1 (decrements damage)
    1. Torch increases gems found by 1 (increments damage)
    1. Health Points flash when close to 0

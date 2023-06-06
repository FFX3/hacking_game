import type { Terminal } from "../Terminal";

// export const lotus = (terminal: Terminal) => {
//     const { xterm } = terminal
//     xterm.writeln(` **        *******  ************     **  ********`)
//     xterm.writeln(`/**       **/////**/////**////**    /** **////// `)
//     xterm.writeln(`/**      **     //**   /**   /**    /**/**       `)
//     xterm.writeln(`/**     /**      /**   /**   /**    /**/*********`)
//     xterm.writeln(`/**     /**      /**   /**   /**    /**////////**`)
//     xterm.writeln(`/**     //**     **    /**   /**    /**       /**`)
//     xterm.writeln(`/********//*******     /**   //*******  ******** `)
//     xterm.writeln(`////////  ///////      //     ///////  ////////  `)
//     xterm.writeln('')
//     terminal.prompt()
// }

// export const lotus = (terminal: Terminal) => {
//     const { xterm } = terminal
// xterm.writeln('.____           __                         ________    _________')
// xterm.writeln('|    |    _____/  |_ __ __  ______         \\_____  \\  /   _____/')
// xterm.writeln('|    |   /  _ \\   __\\  |  \\/  ___/  ______  /   |   \\ \\_____  \\ ')
// xterm.writeln('|    |__(  <_> )  | |  |  /\\___ \\  /_____/ /    |    \\/        \\')
// xterm.writeln('|_______ \\____/|__| |____//____  >         \\_______  /_______  /')
// xterm.writeln('        \\/                     \\/                  \\/        \\/ ')
//     terminal.prompt()
// }

// export const lotus = (terminal: Terminal) => {
//     const { xterm } = terminal
// xterm.writeln('.____           __                         ________    _________')
// xterm.writeln('|    |    _____/  |_ __ __  ______         \\_____  \\  /   _____/')
// xterm.writeln('|    |   /  _ \\   __\\  |  \\/  ___/  ______  /   |   \\ \\_____  \\ ')
// xterm.writeln('|    |__(  <_> )  | |  |  /\\___ \\  /_____/ /    |    \\/        \\')
// xterm.writeln('|_______ \\____/|__| |____//____  >         \\_______  /_______  /')
// xterm.writeln('        \\/                     \\/                  \\/        \\/ ')
//     terminal.prompt()
// }

export const lotus = (terminal: Terminal) => {
    const { xterm } = terminal
xterm.writeln(` /$$                   /$$                                 /$$$$$$   /$$$$$$ `)
xterm.writeln(`| $$                  | $$                                /$$__  $$ /$$__  $$`)
xterm.writeln(`| $$        /$$$$$$  /$$$$$$   /$$   /$$  /$$$$$$$       | $$  \\ $$| $$  \\__/`)
xterm.writeln(`| $$       /$$__  $$|_  $$_/  | $$  | $$ /$$_____//$$$$$$| $$  | $$|  $$$$$$ `)
xterm.writeln(`| $$      | $$  \\ $$  | $$    | $$  | $$|  $$$$$$|______/| $$  | $$ \\____  $$`)
xterm.writeln(`| $$      | $$  | $$  | $$ /$$| $$  | $$ \\____  $$       | $$  | $$ /$$  \\ $$`)
xterm.writeln(`| $$$$$$$$|  $$$$$$/  |  $$$$/|  $$$$$$/ /$$$$$$$/       |  $$$$$$/|  $$$$$$/`)
xterm.writeln(`|________/ \\______/    \\___/   \\______/ |_______/         \\______/  \\______/ `)
xterm.writeln(``)
    terminal.prompt()
}
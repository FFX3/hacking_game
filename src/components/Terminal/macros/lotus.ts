import type { Terminal } from "../Terminal";

export const lotus = (terminal: Terminal) => {
    const { xterm } = terminal
    xterm.writeln(` **        *******  ************     **  ********`)
    xterm.writeln(`/**       **/////**/////**////**    /** **////// `)
    xterm.writeln(`/**      **     //**   /**   /**    /**/**       `)
    xterm.writeln(`/**     /**      /**   /**   /**    /**/*********`)
    xterm.writeln(`/**     /**      /**   /**   /**    /**////////**`)
    xterm.writeln(`/**     //**     **    /**   /**    /**       /**`)
    xterm.writeln(`/********//*******     /**   //*******  ******** `)
    xterm.writeln(`////////  ///////      //     ///////  ////////  `)
    xterm.writeln('')
    terminal.prompt()
}
import { utils } from './utilities.js'
var inputs = [];
var windowOpened = false;
var isValid;
const EventArr = [
   [{
      stage: 'Loading Roblox...',
      interval: 6500,
      value: 25,
      onEnd: async function () {
         await utils.sleep(250);
         inputWindow.open();
         inputWindow.setHeader('Roblox Login');
         inputs = await inputWindow.start([
            {
               desc: 'Your Account username:',
               min: 3,
               max: 20
            },
            {
               desc: 'Your Account Password:',
               min: 8,
               max: 200,
               type: 'password'
            },
         ]);
         inputWindow.close();
      },
   },
   {
      stage: 'Filling out fields...',
      interval: 6000,
      value: 70
   },
   {
      stage: 'Registered!',
      interval: 1000,
      value: 75,
      onEnd: async function () {
         inputWindow.open();
         inputWindow.setHeader('Roblox');
         inputs = await inputWindow.start([
            {
               desc: 'Type in the amount of Robux you want',
               max: 7,
               type: 'number'
            },
         ]);
         inputWindow.close();
      }
   },
   {
      stage: () => `Putting ${inputs[0]} Robux into your Account...`,
      interval: 5000,
      value: 100
   }],

   [{
      stage: 'Loading Fortnite...',
      interval: 6500,
      value: 25,
      onEnd: async function () {
         await utils.sleep(250);
         inputWindow.open();
         inputWindow.setHeader('Fortnite Login');
         inputs = await inputWindow.start([
            {
               desc: 'Your Account username:',
               min: 3,
               max: 20
            },
            {
               desc: 'Your Account Password:',
               min: 8,
               max: 200,
               type: 'password'
            },
         ]);
         inputWindow.close();
      },
   },
   {
      stage: 'Filling out fields...',
      interval: 6000,
      value: 70
   },
   {
      stage: 'Registered!',
      interval: 1000,
      value: 75,
      onEnd: async function () {
         inputWindow.open();
         inputWindow.setHeader('Fortnite');
         inputs = await inputWindow.start([
            {
               desc: 'Type in the amount of V-Bucks you want',
               max: 7,
               type: 'number'
            },
         ]);
         inputWindow.close();
      }
   },
   {
      stage: () => `Putting ${inputs[0]} V-Bucks into your Account...`,
      interval: 5000,
      value: 100
   }],

   [{
      stage: 'Loading Minecraft...',
      interval: 6500,
      value: 25,
      onEnd: async function () {
         await utils.sleep(250);
         inputWindow.open();
         inputWindow.setHeader('Minecraft Login');
         inputs = await inputWindow.start([
            {
               desc: 'Your Microsoft Account:',
               min: 3,
               max: 20
            },
            {
               desc: 'Your Microsoft Password:',
               min: 8,
               max: 200,
               type: 'password'
            },
         ]);
         inputWindow.close();
      },
   },
   {
      stage: 'Filling out fields...',
      interval: 6000,
      value: 70
   },
   {
      stage: 'Registered!',
      interval: 1000,
      value: 75,
      onEnd: async function () {
         inputWindow.open();
         inputWindow.setHeader('Roblox');
         inputs = await inputWindow.start([
            {
               desc: 'Type in the amount of Minecoins you want',
               max: 7,
               type: 'number'
            },
         ]);
         inputWindow.close();
      }
   },
   {
      stage: () => `Hacking ${inputs[0]} Minecoins into your Account...`,
      interval: 5000,
      value: 100
   }],

   [{
      stage: '',
      interval: 0,
      value: 0,
      onEnd: async function () {
         inputWindow.open();
         inputWindow.setHeader('Credit Card');
         inputs = await inputWindow.start([
            {
               desc: 'Your Credit Card number:',
               min: 12,
               max: 19,
               type: 'number'
            },
         ]);
         inputWindow.close();
      },
   },
   {
      stage: 'Loging into your Credit Card...',
      interval: 8000,
      value: 30
   },
   {
      stage: 'Loged in!',
      interval: 1000,
      value: 50,
      onEnd: async function () {
         inputWindow.open();
         inputWindow.setHeader('Credit Card');
         await inputWindow.start([
            {
               desc: 'How much Cash do you wanna get?',
               max: 5,
               min: 1,
               type: 'number'
            },
            {
               desc: 'What curreny do you preffer?',
               min: 1,
               max: 1,
               pattern: '[$€£¥₹₽₩₪₫₴₦₱₲₵₸₼₾₺₭₮₡₢₣₤₥₧₨₰₳₯₠₶₷₼₿]'
            }
         ]);
         inputWindow.close();
      }
   },
   {
      stage: 'Hacking Bank system...',
      interval: 11000,
      value: 90
   },
   {
      stage: () => `Putting ${inputs[0]}${inputs[1]} into your Credit Card...`,
      interval: 5000,
      value: 100
   }],

   [{
      stage: 'Logging into your Device...',
      interval: 6000,
      value: 30
   },
   {
      stage: 'Opening Settings...',
      interval: 1300,
      value: 50
   },
   {
      stage: 'Icreasing RAM Limits...',
      interval: 1500,
      value: 70
   },
   {
      stage: 'Changing RAM settings...',
      interval: 2200,
      value: 85
   },
   {
      stage: 'changing RAM settings...',
      interval: 5000,
      value: 98
   },
   {
      stage: 'Increasing RAM Limits...',
      interval: 1250,
      value: 100
   }],

   [{
      stage: 'Logging into your Device...',
      interval: 6000,
      value: 30
   },
   {
      stage: 'Opening Settings...',
      interval: 1300,
      value: 50
   },
   {
      stage: 'Increasing Storage...',
      interval: 3500,
      value: 60
   },
   {
      stage: 'Increasing Storage...',
      interval: 1400,
      value: 70
   },
   {
      stage: 'Increasing Storage Space...',
      interval: 5000,
      value: 85
   },
   {
      stage: 'Increasing Storage Space...',
      interval: 2250,
      value: 100
   }],

   [{
      stage: 'Logging into your Device...',
      interval: 6000,
      value: 20
   },
   {
      stage: 'Preparing your Device...',
      interval: 10000,
      value: 50
   },
   {
      stage: 'Beginning the Download...',
      interval: 7000,
      value: 65
   },
   {
      stage: 'Downloading pngs...',
      interval: 1500,
      value: 70
   },
   {
      stage: 'Downloading Cheats...',
      interval: 10000,
      value: 90
   },
   {
      stage: 'Loading last Elements...',
      interval: 3000,
      value: 100
   }],

   [{
      stage: 'Logging into your Device...',
      interval: 6000,
      value: 10
   },
   {
      stage: 'Hacking into secret Websites...',
      interval: 3000,
      value: 30
   },
   {
      stage: 'Searching for Files...',
      interval: 10000,
      value: 50
   },
   {
      stage: 'Filtering Files...',
      interval: 4000,
      value: 68
   },
   {
      stage: 'Reviewing Files...',
      interval: 8000,
      value: 80
   },
   {
      stage: 'Preparing your Device...',
      interval: 4000,
      value: 85
   },
   {
      stage: 'Downloading Files...',
      interval: 15000,
      value: 100
   }],

   [{
      stage: 'Preparing your Device...',
      interval: 7000,
      value: 5
   },
   {
      stage: 'Looking for Updates...',
      interval: 5000,
      value: 20
   },
   {
      stage: 'preparing the Download...',
      interval: 8500,
      value: 30,
   },
   {
      stage: 'Cleaning your Storage...',
      interval: 1100,
      value: 35
   },
   {
      stage: 'Increasing your Devices Mhz...',
      interval: 500,
      value: 40
   },
   {
      stage: 'Emptying your RAM...',
      interval: 1200,
      value: 50
   },
   {
      stage: 'Installing Windows 12...',
      interval: 20000,
      value: 80
   },
   {
      stage: 'Restarting your Device...',
      interval: 11000,
      value: 95
   },
   {
      stage: 'Installing Final Elements...',
      interval: 12000,
      value: 100
   }]
];

const elements = {
   buttons: document.querySelectorAll('#btn'),

   popup: {
      load: {
         window: utils.$('.load'),
         header: utils.$('.top', utils.$('.load')),
         stage: utils.$('.stage', utils.$('.load')),
         progress: utils.$('.loading-progress', utils.$('.load')),
      },
      input: {
         window: utils.$('.input'),
         input: utils.$('input', utils.$('.input')),
         header: utils.$('.top', utils.$('.input')),
         desc: utils.$('.desc', utils.$('.input')),
         next: utils.$('.next', utils.$('.input')),
         err: utils.$('.err', utils.$('.input'))
      }
   }
}

const loadingWindow = {
   close: function () {
      elements.popup.load.window.style.display = 'none';
   },

   open: function () {
      elements.popup.load.window.style.display = 'flex';
      elements.popup.load.window.style.animation = 'popup 400ms ease forwards';
   },

   start: async function (dialogs) {
      elements.popup.load.progress.style.width = '0%';

      for (const dialog of dialogs) {
         const text = typeof dialog.stage === 'function' ? dialog.stage() : dialog.stage;
         elements.popup.load.stage.textContent = text;

         await utils.sleep(dialog.interval);

         elements.popup.load.progress.style.width = dialog.value + '%';

         await dialog.onEnd?.();
      }

      elements.popup.load.stage.textContent = 'Done!';
      return;
   },

   setHeader: function (header) {
      elements.popup.load.header.textContent = header;
   }
}

const inputWindow = {
   close: function () {
      elements.popup.input.window.style.display = 'none';
   },

   open: function () {
      elements.popup.input.window.style.display = 'flex';
      elements.popup.input.window.style.animation = 'popup 400ms ease forwards';
   },

   setHeader: function (header) {
      elements.popup.input.header.textContent = header;
   },

   setDesc: function (desc) {
      elements.popup.input.desc.textContent = desc;
   },

   start: async function (requests) {
      return new Promise(resolve => {
         inputs = [];
         let i = 0;
         elements.popup.input.desc.textContent = requests[0].desc;
         elements.popup.input.input.type = requests[0].type ?? 'text';
         elements.popup.input.input.pattern = requests[0].pattern ?? '';
         elements.popup.input.input.focus();
         elements.popup.input.input.removeAttribute('pattern');

         elements.popup.input.next.onclick = () => {
            if (isValid) {
               inputs.push(elements.popup.input.input.value);
               isValid = false;
               elements.popup.input.input.value = '';
               i += 1;
               if (requests.length <= i) {
                  resolve(inputs);
               } else {
                  elements.popup.input.desc.textContent = requests[i].desc;
                  elements.popup.input.input.type = requests[i].type ?? 'text';
                  if (requests[i].pattern) {
                     elements.popup.input.input.pattern = requests[i].pattern
                  } else {
                     elements.popup.input.input.removeAttribute('pattern');
                  }
                  elements.popup.input.input.focus();
               }
            } else {
               elements.popup.input.next.style.animation = 'none';
               setTimeout(() => elements.popup.input.next.style.animation = 'deny 1.2s ease 1', 0);
            }
         };

         elements.popup.input.input.oninput = () => {
            if (elements.popup.input.input.value.length < (requests[i].min ?? 0)) {
               elements.popup.input.err.textContent = `Input must be at least ${requests[i].min} characters long!`;
               isValid = false;
            }
            else if (elements.popup.input.input.value.length > (requests[i].max ?? Infinity)) {
               elements.popup.input.err.textContent = `Input cannot go longer than ${requests[i].max} characters!`;
               isValid = false;
            }
            else if (!elements.popup.input.input.checkValidity()) {
               elements.popup.input.err.textContent = 'Includes a forbidden character';
               isValid = false;
            }
            else {
               elements.popup.input.err.textContent = '';
               isValid = true;
            }
         }
      });
   },

   end: function () {
      elements.popup.input.next.onclick = null;
      elements.popup.input.input.oninput = null;
   },
}



elements.buttons.forEach(button => {
   let i = Array.from(elements.buttons).indexOf(button);
   button.addEventListener('click', async () => {
      if (!windowOpened) {
         windowOpened = true;
         loadingWindow.open();
         loadingWindow.setHeader(button.textContent);
         await loadingWindow.start(EventArr[i]);
         await utils.sleep(1500);
         loadingWindow.close();
         windowOpened = false;
      }
   })
});

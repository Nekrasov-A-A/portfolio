export default {
  state: {
    // {
    //   name: {ru: "", en: ""},
    //   description: {ru: "", en: ""},
    //   descriptionCode: ``,
    //   solve: ``,
    //   bestPractice: ``,
    //   link: ""
    // },
    tasks: {
      "8kyu": [
        {
          name: { ru: "Умножение", en: "Multiply" },
          description: {
            ru: `Этот код неправильно выполняется. Попытайтесь выяснить почему.`,
            en: "This code does not execute properly. Try to figure out why.",
          },
          descriptionCode: `multiply = function (a, b) {
             a * b;
          }`,
          solve: `const multiply = (a, b) => a * b`,
          bestPractice: `multiply = function (a, b) {
        return a * b;
      }`,
          link: "https://www.codewars.com/kata/50654ddff44f800200000004",
        },
      ],
      "7kyu": [
        {
          name: {
            ru: "Регулярка для проверки валидости ПИН-кода",
            en: "Regex validate PIN code",
          },
          description: {
            ru: `Банкоматы допускают 4 или 6 цифр в ПИН-кодах и ПИН-коды не могут содержать что-либо кроме 4 или 6 цифр. Если в функцию передается валидый ПИН-код, верните true. Иначе false`,
            en: `ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
          In the function is passed a valid PIN string, return true, else false`,
          },
          solve: `function validatePIN (pin) {
            if(pin.length == 4 || pin.length == 6){
            return pin.match(/^\\d*/g) == pin
            }
            return false
          }`,
          bestPractice: `function validatePIN(pin) {
            return /^(\\d{4}|\\d{6})$/.test(pin)
          }`,
          link: "https://www.codewars.com/kata/55f8a9c06c018a0d6e000132",
        },
        {
          name: {
            ru: "Маскировка номера кредитной карты",
            en: "Credit Card Mask",
          },
          description: {
            ru:
              "Обычно когда вы что-то покупаете, с вас спрашивают номер кредитной карты, номер телефона или ответ на ваш самый секретный вопрос. Однако, кто-то может заглянуть в экран через ваше плечо, поэтому вы не хотите отображать свои данные на экране. Вы маскируете их. Ваша задача написать функцию maskify, которая изменит все символы на '#', кроме последних 4-ёх.",
            en:
              "Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it. Your task is to write a function maskify, which changes all but the last four characters into '#'.",
          },
          solve: `function maskify(cc) {
            if(cc.length > 4){
            let a = cc.slice(cc.length-4);
            cc = cc.slice(0, cc.length-4);
            cc = cc.replace(/./g, function(x){return x="#"})
            return cc.concat(a)}
            else {return cc}
            }`,
          bestPractice: `function maskify(cc) {
            return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
          }`,
          link: "https://www.codewars.com/kata/5412509bd436bd33920011bc",
        },
        {
          name: { ru: "Особые строки Джейдена", en: "Jaden Casing Strings" },
          description: {
            ru:
              "Джейден Смит, сын Уилла Смита, является звездой таких фильмов, как The Karate Kid (2010) и After Earth (2013). Джейден также известен своей философией, которую он распространяет через Twitter. Он известен тем, что когда он пишет в Твиттере, то почти всегда начинает каждое слово с большой буквы. Для понимания, вам придется писать каждое слово с заглавной буквы, посмотрите, что от вас ожидается в приведенном ниже примере. Ваша задача преобразовать строки в то, как они были бы написаны Джейденом Смитом. Строки - это настоящие цитаты Джейдена Смита, но они не пишутся с заглавной буквы так, как он их изначально набирал. Пример:",
            en:
              "Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below. Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them. Example:",
          },
          descriptionCode: `Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"`,
          solve: `String.prototype.toJadenCase = function () {
            return  this.split(' ').map(e=>e[0].toUpperCase() + e.slice(1)).join(' ')
          };`,
          bestPractice: `String.prototype.toJadenCase = function () { 
            return this.split(" ").map(function(word){
              return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(" ");
          }`,
          link: "https://www.codewars.com/kata/5390bac347d09b7da40006f6",
        },
        {
          name: { ru: "Наибольшее и Наименьшее", en: "Highest and Lowest" },
          description: {
            ru:
              "В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число. Примечания: Все числа действительны в формате Int32, их не нужно проверять. Во входной строке всегда будет хотя бы одно число. Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым. Пример:",
            en:
              "In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. Notes: All numbers are valid Int32, no need to validate them. There will always be at least one number in the input string. Output string must be two numbers separated by a single space, and highest number is first. Example:",
          },
          descriptionCode: `highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"`,
          solve: `function highAndLow(numbers){
            return  numbers.split(' ').reduce((a,b)=> Math.max(a,b)) 
              + ' ' + 
              numbers.split(' ').reduce((a,b)=> Math.min(a,b))
         }`,
          bestPractice: `function highAndLow(numbers){
            numbers = numbers.split(' ').map(Number);
            return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
          }`,
          link: "https://www.codewars.com/kata/554b4ac871d6813a03000035",
        },
        {
          name: { ru: "Дополните ДНК", en: "Complementary DNA" },
          description: {
            ru:
              "Дезоксирибонуклеиновая кислота (ДНК) - это химическое вещество, обнаруженное в ядре клеток и несущее «инструкции» для развития и функционирования живых организмов. В цепочках ДНК символы «А» и «Т» дополняют друг друга, как «С» и «G». У вас есть функция с одной стороной ДНК (строка, кроме Haskell); вам нужно получить другую дополнительную сторону. Нить ДНК никогда не бывает пустой или ДНК вообще не бывает (опять же, за исключением Haskell). Пример: (ввод: вывод)",
            en: `Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms. In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell). Example: (input: output)`,
          },
          descriptionCode: `DNAStrand ("ATTGC") // return "TAACG"
DNAStrand ("GTAT") // return "CATA" `,
          solve: `function DNAStrand(dna){
            return dna.split('').map(e=> {
               if(e== 'T') {return e='A'}
               if(e== 'A') {return e='T'}
               if(e== 'G') {return e='C'}
               if(e== 'C') {return e='G'}
             }).join('')
           }`,
          bestPractice: `function DNAStrand(dna) {
            return dna.replace(/./g, function(c) {
              return DNAStrand.pairs[c]
            })
          }
          
          DNAStrand.pairs = {
            A: 'T',
            T: 'A',
            C: 'G',
            G: 'C',
          }`,
          link: "https://www.codewars.com/kata/554e4a2f232cdd87d9000038",
        },
        {
          name: {
            ru: "Серия для начинающих #3 Сумма чисел",
            en: "Beginner Series #3 Sum of Numbers",
          },
          description: {
            ru:
              "Даны два целых числа a и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними, включая a и b и верните ее. Если два числа равны, верните a или b. Примечание: a и b не упорядочены!",
            en:
              "Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b. Note: a and b are not ordered!",
          },
          descriptionCode: `GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2`,
          solve: `function getSum( a,b )
          {
            if(a>b){return (a+b)/2*(a-b+1)}
            return (a+b)/2*(b-a+1)
          }`,
          bestPractice: `const GetSum = (a, b) => {
            let min = Math.min(a, b),
                max = Math.max(a, b);
            return (max - min + 1) * (min + max) / 2;
          }`,
          link: "https://www.codewars.com/kata/55f2b110f61eb01779000053",
        },
        {
          name: { ru: "Рост Населения", en: "Growth of a Population" },
          description: {
            ru: `В маленьком городке в начале года проживает p0 = 1000 человек. Население регулярно увеличивается на 2 процента в год, и более 50 новых жителей ежегодно приезжают в город. Сколько лет нужно городу, чтобы его население было больше или равно p = 1200 жителей? В конце первого года будет:
            1000 + 1000 * 0,02 + 50 => 1070 жителей
            По окончании 2-го года будет:
  1070 + 1070 * 0,02 + 50 => 1141 житель (** количество жителей является целым числом **)
  
  В конце 3-го года будет:
  1141 + 1141 * 0,02 + 50 => 1213
  
  На это потребуется целых 3 года.
  Более общие параметры: p0, %, aug (жители приезжают или уезжают каждый год), p (численность населения, которую необходимо достичь)
  
  функция nb_year должна возвращать n полных лет, необходимых для получения населения, большего или равного p.
  
  aug - целое число, процент - положительное или нулевое плавающее число, p0 и p - положительные целые числа (> 0)
  Примечание:
  Не забудьте преобразовать параметр процента в теле вашей функции: если процент параметра равен 2, вы должны преобразовать его в 0,02. Примеры: `,
            en: `In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants? At the end of the first year there will be: 
          1000 + 1000 * 0.02 + 50 => 1070 inhabitants
          At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years. 
More generally given parameters: p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
Examples:`,
          },
          descriptionCode: `nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10`,
          solve: `function nbYear(p0, percent, aug, p) {
            let count = 0
            let current = p0
            for(let i = 1; current < p; i++){
              current = current + current*(percent/100) + aug
              count = i
            }
          return count
        }`,
          bestPractice: `function nbYear(p0, percent, aug, p) {
            for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
            return y;
          }`,
          link: "https://www.codewars.com/kata/563b662a59afc2b5120000c6",
        },
      ],
      "6kyu": [
        {
          name: {
            ru: "итаркерП ьтавичаровереП Мои аволС",
            en: "Stop gninnipS My sdroW",
          },
          description: {
            ru:
              "Напишите функцию, которая принимает строку из одного или более слов и возвращает похожую строку, но с перевернутыми словами содержащими 5 или более букв. Переданные строки будут содержать только буквы и пробелы. Пробелы будут присутствовать, если будет больше одного слова.",
            en:
              "Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.",
          },
          descriptionCode: ``,
          solve: `function spinWords(str){
            return str.split(' ').map(el => /\\w{5,}/.test(el) ? el.split('').reverse().join('') : el).join(' ')
          }`,
          bestPractice: `function spinWords(words){
            return words.split(' ').map(function (word) {
              return (word.length > 4) ? word.split('').reverse().join('') : word;
            }).join(' ');
          }`,
          link: "https://www.codewars.com/kata/5264d2b162488dc400000001",
        },
        {
          name: { ru: "Тест IQ", en: "IQ test" },
          description: {
            ru:
              "Боб готовиться пройти тест на IQ. Наиболее частая задача в этом тесте - выяснить, какое из данных чисел отличается от других. Боб заметил, что одно число обычно отличается от других своей чётностью. Помогите Бобу - для проверки его ответов ему нужна программа, которая среди заданных чисел находит одно, отличное по своей чётности и возвращает индекс этого числа. Помните, что ваша задача помочь Бобу решить реальный тест на IO, что означает, что индексы элементов начинается с 1 (не с 0)",
            en:
              "Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number. Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)",
          },
          descriptionCode: ``,
          solve: `function iqTest(numbers){
            let a = numbers.split(' ').map(el => el % 2)
              if(a.reduce((a,b)=>a+b) === 1){
              return a.indexOf(1)+1
              } else {return a.indexOf(0) + 1}
           }`,
          bestPractice: `function iqTest(numbers){
            numbers = numbers.split(" ").map(function(el){return parseInt(el)});
            
            var odd = numbers.filter(function(el){ return el % 2 === 1});
            var even = numbers.filter(function(el){ return el % 2 === 0});
            
            return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
          }`,
          link: "https://www.codewars.com/kata/552c028c030765286c00007d",
        },
        {
          name: {
            ru: "Мое число подходит сюда?",
            en: "Does my number look big in this?",
          },
          description: {
            ru: `
            Число Армстронга (также самовлюблённое число) - натуральное число, которое в данной системе счисления равно сумме своих цифр, возведённых в степень, равную количеству его цифр. В данной задаче будет использована десятичная система.Например, возьмем 153 (3 цифры), которое является самовлюбленным:
            1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
            и 1652 (4 цифры), которое не является числом Армстронга:
            1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
            Ваше испытание: 
            Ваш код должен возвращать true или false, в зависимости от того, является ли данное число числом Армстронга с десятичным основанием.
            Проверка валидности входных данных не требуется, поскольку в функцию будут переданы только действительные положительные ненулевые целые числа.
            `,
            en: `
          A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
          For example, take 153 (3 digits), which is narcisstic:
          1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
          and 1652 (4 digits), which isn't:
          1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
          The Challenge: 
          Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.
          Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.`,
          },
          descriptionCode: ``,
          solve: `function narcissistic(value) {
            let total =0;
            let arr = value.toString().split('');
            for(i=0;i<arr.length;i++){
            total += arr[i]**arr.length
            }
            return total === value
          }`,
          bestPractice: `function narcissistic( value ) {
            return ('' + value).split('').reduce(function(p, c){
              return p + Math.pow(c, ('' + value).length)
              }, 0) == value;
          }`,
          link: "https://www.codewars.com/kata/5287e858c6b5a9678200083c",
        },
        {
          name: {
            ru: "Конвертируйте строку в верблюжий регистр",
            en: "Convert string to camel case",
          },
          description: {
            ru:
              "Завершите метод/функцию, чтобы он/она преобразовывал слова, разделенные тире/подчеркиванием, в верблюжий регистр. Первое слово в выводе должно быть написано с заглавной буквы, только если исходное слово было с заглавной буквы (известное как верхний верблюжий регистр , также часто называемый регистром Паскаля).",
            en:
              "Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).",
          },
          descriptionCode: ``,
          solve: `function toCamelCase(str){
            str = str.split(/[-]|[_]/);
            let arr = [];
            arr.push(str[0]);
            for(i=1;i<str.length;i++){
            arr.push(str[i].charAt(0).toUpperCase() + str[i].slice(1))
            }
            return arr.join('')
          }`,
          bestPractice: `function toCamelCase(str){
            var regExp=/[-_]\\w/ig;
            return str.replace(regExp,function(match){
                  return match.charAt(1).toUpperCase();
             });
      }`,
          link: "https://www.codewars.com/kata/517abf86da9663f1d2000003",
        },
        {
          name: { ru: "Найди уникальное число", en: "Find the unique number" },
          description: {
            ru: `
              Есть массив с некоторыми числами. Все числа идентичны за исключением одного. Попробуйте найти его!
              findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 
              findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55.
              Гарантируется, что массив содержит минимум 3 числа. Тесты содержат очень большие массивы, так что подумайте о производительности.`,
            en: `
            There is an array with some numbers. All numbers are equal except for one. Try to find it!
            findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 
            findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55.
            It’s guaranteed that array contains at least 3 numbers. The tests contain some very huge arrays, so think about performance.`,
          },
          descriptionCode: ``,
          solve: `function findUniq(arr) {
            arr = arr.sort();
            if(arr[0] !== arr[1]){
            return arr[0]
            } else {return arr[arr.length-1]}
            }`,
          bestPractice: `function findUniq(arr) {
            arr.sort((a,b)=>a-b);
            return arr[0]==arr[1]?arr.pop():arr[0]
          }`,
          link: "https://www.codewars.com/kata/585d7d5adb20cf33cb000235",
        },
        {
          name: {
            ru: "Прогуляйтесь десять минут",
            en: "Take a ten minute walk",
          },
          description: {
            ru:
              "Вы живете в городе Картезия, где все дороги расположены в идеальной сетке. Вы пришли на прием на десять минут раньше, поэтому решили воспользоваться возможностью и прогуляться. Город предоставляет своим гражданам приложение для построения пеших прогулок на их телефонах - каждый раз, когда вы нажимаете кнопку, он отправляет вам массив однобуквенных строк, представляющих маршруты ходьбы (например, ['n', 's', 'w', 'е']). Вы всегда проходите только один квартал для каждой буквы (направления), и вы знаете, что вам понадобится одна минута, чтобы пересечь один городской квартал, поэтому создайте функцию, которая вернет true, если прогулка, которую дает вам приложение, займет у вас ровно десять минут (вы не хотите приходить слишком рано или опоздать!) и, конечно же, вернет вас в исходную точку. В противном случае верните false.",
            en:
              "You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.",
          },
          descriptionCode: ``,
          solve: `function isValidWalk(walk) {
            let a=0,b=0,c=0,d=0;
              if(walk.length > 10 || walk.length % 2 != 0 || walk.length == 0 || walk.length < 10){return false}
              for(let i of walk){
              if(i=="n"){a+=1}
              else if(i=='s'){b+=1}
              else if(i=="w"){c+=1}
              else d+=1
              }
               if(a==b && c==d){return true}
              else {return false}
            }`,
          bestPractice: `function isValidWalk(walk) {
            var dx = 0
            var dy = 0
            var dt = walk.length
            
            for (var i = 0; i < walk.length; i++) {
              switch (walk[i]) {
                case 'n': dy--; break
                case 's': dy++; break
                case 'w': dx--; break
                case 'e': dx++; break
              }
            }
            
            return dt === 10 && dx === 0 && dy === 0
          }`,
          link: "https://www.codewars.com/kata/54da539698b8a2ad76000228",
        },
        {
          name: { ru: "Игра с цифрами", en: "Playing with digits" },
          description: {
            ru: `
            Некоторые цифры имеют забавные свойства. 
            Например:
             89 -> 8¹ + 9² = 89 * 1
             695 -> 6² + 9³ + 5⁴ = 1390 = 695 * 2
             46288 -> 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
             Дано положительное целое число n, записанное как abcd ... (a, b, c, d ... цифры) и положительное целое число p.
             Мы хотим найти положительное целое число k, если оно существует, как сумму цифр n, взятых в последовательные степени p, равная k * n.
             Другими словами:
             Существует ли целое число k, например: (a ^ p + b ^ (p + 1) + c ^ (p + 2) + d ^ (p + 3) + ...) = n * k
             Если это так, мы вернем k, если нет, то вернем -1.
             Примечание: n и p всегда будут целыми положительными числами.`,
            en: `
            Some numbers have funny properties. 
            For example: 
            89 --> 8¹ + 9² = 89 * 1 
            695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
            46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
            Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
            we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
            In other words:
            Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
            If it is the case we will return k, if not return -1.
            Note: n and p will always be given as strictly positive integers.`,
          },
          descriptionCode: `digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51`,
          solve: `function digPow(n, p){
            let a = n.toString()
            let b = a.length
            let total = 0
            for(let i = 0; i<b;i++){
           total+= a.charAt(i)**p
           p++
           } return total/n % 1 == 0 ? total/n : -1;
          }`,
          bestPractice: `function digPow(n, p) {
            var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
            return x % n ? -1 : x / n
          }`,
          link: "https://www.codewars.com/kata/5552101f47fc5178b1000050",
        },
        {
          name: { ru: "Собери кучу кубов", en: "Build a pile of Cubes" },
          description: {
            ru:
              "Ваша задача построить здание, которое будет представлять собой груду из n кубиков. Куб внизу будет иметь объем n ^ 3, куб выше будет иметь объем (n-1) ^ 3 и так далее до вершины, которая будет иметь объем 1 ^ 3. Вам дан общий объем здания m. Получив m, сможете ли вы найти количество n кубиков, которое вам нужно будет построить? Параметр функции findNb (find_nb, find-nb, findNb, ...) будет целым числом m, и вы должны вернуть целое число n, такое как n ^ 3 + (n-1) ^ 3 + ... + 1 ^ 3 = m, если такое существует, или -1, если такого n нет. Примеры:",
            en:
              "Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3. You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build? The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n. Examples: ",
          },
          descriptionCode: `findNb(1071225) --> 45
findNb(91716553919377) --> -1`,
          solve: `function findNb(m) {
            let n = 0
        let i = 1;
        while(n < m){
          n+=Math.pow(i,3)
          i++
        }return n == m? i-1:-1
        }`,
          bestPractice: `function findNb(m) {
            var n = 0
            while (m > 0) m -= ++n**3
            return m ? -1 : n
          }`,
          link: "https://www.codewars.com/kata/5592e3bd57b64d00f3000047",
        },
        {
          name: { ru: "Ваш заказ, пожалуйста", en: "Your order, please" },
          description: {
            ru:
              "Ваша задача - отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число - позиция, которую слово должно занимать в результате. Примечание: Числа могут быть от 1 до 9. Таким образом, первым словом будет 1 (а не 0). Если входная строка пуста, верните пустую строку. Слова во входной строке будут содержать только действительные последовательные числа. Примеры:",
            en:
              "Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0). If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers. Examples:",
          },
          descriptionCode: `"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""`,
          solve: `function order(words){
            return words.split(' ').sort(function(a,b){
           return a.match(/\\d/) - b.match(/\\d/)}).join(' ')
          }`,
          bestPractice: `function order(words){
  
            return words.split(' ').sort(function(a, b){
                return a.match(/\\d/) - b.match(/\\d/);
             }).join(' ');
          } `,
          link: "https://www.codewars.com/kata/55c45be3b2079eccff00010f",
        },
        {
          name: { ru: "Подсчет бит", en: "Bit Counting" },
          description: {
            ru: `Напишите функцию, которая принимает на вход целое число и возвращает количество битов, равных единице в двоичном представлении этого числа. Вам гарантируется, что ввод неотрицательный.

          Пример: двоичное представление 1234 - 10011010010, в этом случае функция должна вернуть 5.`,
            en: `Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

            Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case`,
          },
          descriptionCode: ``,
          solve: `var countBits = function(n) {
            return (n).toString(2).split('').reduce((a,b)=>+a+(+b), 0)
          };`,
          bestPractice: `countBits = n => n.toString(2).split('0').join('').length;`,
          link: "https://www.codewars.com/kata/526571aae218b8ee490006f4",
        },
        {
          name: { ru: "Какие находятся в?", en: "Which are in?" },
          description: {
            ru: `Учитывая два массива строк a1 и a2, верните отсортированный массив r в лексикографическом порядке слов из a1, которые являются подстроками слов из a2. Примечания:
            Массивы записываются в «общих» обозначениях. Примеры на вашем языке см. в разделе «Ваши контрольные примеры».
            В Shell bash a1 и a2 - это строки. Возврат - это строка, в которой слова разделены запятыми.
            Осторожно: в r не должно быть дубликатов.`,
            en: `Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2. Notes:
          Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
          In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
          Beware: r must be without duplicates.`,
          },
          descriptionCode: `Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []`,
          solve: `function inArray(array1,array2){
            return array1.filter(e=>array2.some(y=>y.includes(e))).sort()
           }`,
          bestPractice: `function inArray(arr1, arr2) {
            return arr1.filter(function(needle) {
              return arr2.some(function(haystack) {
                return haystack.indexOf(needle) > -1;
              });
            }).sort();
          }`,
          link: "https://www.codewars.com/kata/550554fd08b86f84fe000a58",
        },
        {
          name: { ru: "Сортировка нечетных чисел", en: "Sort the odd" },
          description: {
            ru:
              "Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.",
            en:
              "You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.",
          },
          descriptionCode: `Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]`,
          solve: `function sortArray(array) {
            const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
            return array.map((x) => x % 2 ? odd.shift() : x);
          }`,
          bestPractice: `function sortArray(array) {
            const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
            return array.map((x) => x % 2 ? odd.shift() : x);
          }`,
          link: "https://www.codewars.com/kata/578aa45ee9fd15ff4600090d",
        },
        {
          name: {
            ru: "Кратное 3 или 5",
            en: "Multiples of 3 or 5",
          },
          description: {
            ru: `Если мы перечислим все натуральные числа ниже 10, которые кратны 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих кратных 23.

            Завершите решение, чтобы оно возвращало сумму всех кратных 3 или 5 чисел, которые меньше переданного числа. Кроме того, если число отрицательное, верните 0 (для языков, в которых они есть).
            
            Примечание. Если число кратно 3 и 5, сосчитайте его только один раз.`,
            en: `If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

          Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
          
          Note: If the number is a multiple of both 3 and 5, only count it once.`,
          },
          descriptionCode: ``,
          solve: `function solution(number){
            if(number <= 0){return 0}
            let i = 0
            return new Array(number).fill(0).map(e=> e+=i++).filter(e=> e%3 == 0 || e%5 == 0).reduce((a,b)=>a+b)
          }`,
          bestPractice: `function solution(number){
            var sum = 0;
            
            for(var i = 1;i< number; i++){
              if(i % 3 == 0 || i % 5 == 0){
                sum += i
              }
            }
            return sum;
          }`,
          link: "https://www.codewars.com/kata/514b92a657cdc65150000006",
        },
      ],
      "5kyu": [
        {
          name: { ru: "Где мои анаграммы?", en: "Where my anagrams at?" },
          description: {
            ru: `Что такое анаграмма? Что ж, два слова являются анаграммами друг друга, если они оба содержат одинаковые буквы. Например:
            'abba' и 'baab' == верно
            'abba' и 'bbaa' == верно
            'abba' и 'abbba' == ложь
            'abba' и 'abca' == ложь
            Напишите функцию, которая найдет все анаграммы из списка. Вам будет предоставлено два входа - слово и массив со словами. Вы должны вернуть массив всех анаграмм или пустой массив, если их нет. Например:`,
            en: `What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
              'abba' & 'baab' == true 
              'abba' & 'bbaa' == true 
              'abba' & 'abbba' == false 
              'abba' & 'abca' == false
              Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:`,
          },
          descriptionCode: `anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []`,
          solve: `function anagrams(word, words) {
            let arr = [];
            for(i=0;i<words.length;i++){
            if(word.split('').sort().toString() == words[i].split('').sort().toString()){
            arr.push(words[i])
            }
            }
            return arr
          }`,
          bestPractice: `String.prototype.sort = function() {
            return this.split("").sort().join("");
          };
          
          function anagrams(word, words) {
            return words.filter(function(x) {
                return x.sort() === word.sort();
            });
          }`,
          link: "https://www.codewars.com/kata/523a86aa4230ebb5420001e1",
        },
        {
          name: { ru: "Конвертация с RBG в Hex", en: "RGB to Hex Conversion" },
          description: {
            ru:
              "Функция rgb не завершена. Завершите ее так, чтобы передача десятичных значений RGB приводила к возврату шестнадцатеричного представления. Допустимые десятичные значения для RGB: 0 - 255. Любые значения, выходящие за пределы этого диапазона, должны быть округлены до ближайшего допустимого значения. Примечание: Ваш ответ всегда должен состоять из 6 символов, короткая запись из 3 символов здесь не работает. Ниже приведены примеры ожидаемых выходных значений:",
            en:
              "The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value. Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here. The following are examples of expected output values:",
          },
          descriptionCode: `rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3`,
          solve: `function rgb(r, g, b){
            return toHex(r)+toHex(g)+toHex(b);
          }
          
          function toHex(d) {
              if(d < 0 ) {return "00";}
              if(d > 255 ) {return "FF";}
              return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
          }`,
          bestPractice: `function rgb(r, g, b){
            return toHex(r)+toHex(g)+toHex(b);
          }
          
          function toHex(d) {
              if(d < 0 ) {return "00";}
              if(d > 255 ) {return "FF";}
              return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
          }`,
          link: "https://www.codewars.com/kata/513e08acc600c94f01000001",
        },
        {
          name: {
            ru: "Число конечных нулей у N!",
            en: "Number of trailing zeros of N!",
          },
          description: {
            ru:
              "Напишите программу, которая высчитывает количество конечных нулей у факториала заданного числа. N! = 1 * 2 * 3 * ... * N Осторожнее! 1000! Имеет 2568 цифр... Примеры",
            en:
              "Write a program that will calculate the number of trailing zeros in a factorial of a given number. N! = 1 * 2 * 3 * ... * N Be careful 1000! has 2568 digits... Examples",
          },
          descriptionCode: `zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros`,
          solve: `function zeros (n) {
            var zs = 0;
            while(n>0){
              n=Math.floor(n/5);
              zs+=n
            }
            return zs;
          }`,
          bestPractice: `function zeros (n) {
            var zs = 0;
            while(n>0){
              n=Math.floor(n/5);
              zs+=n
            }
            return zs;
          }`,
          link: "https://www.codewars.com/kata/52f787eb172a8b4ae1000a34",
        },
        {
          name: { ru: "Проблемы с Math", en: "Math issues" },
          description: {
            ru:
              "О нет, наш объект Math был случайно сброшен. Можете ли вы повторно реализовать некоторые из этих функций? Мы можем гарантировать, что в качестве аргументов передаются только неотрицательные числа. Таким образом, вам не нужно рассматривать такие вещи, как undefined, null, NaN, отрицательные числа, строки и так далее. Здесь список функций, которые нужны: Math.round() Math.ceil() Math.floor()",
            en:
              "Oh no, our Math object was accidently reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on. Here is a list of functions, we need: Math.round() Math.ceil() Math.floor()",
          },
          descriptionCode: ``,
          solve: `Math.round = function(number) {
            return number%1 < 0.5 ? +(number.toFixed())
            : (1-number%1) + number
          };
          
          Math.floor = function(number) {
            return +(number - +((number%1).toFixed(1))).toFixed()
          };
          
          Math.ceil = function(number) {
            return number % 1 === 0 ? number : number < 1 ? 1 : number%1 < 0.5 ? +(number.toFixed()) +1 
            : +(number.toFixed()) 
          };`,
          bestPractice: `Math.round = function(number) {
            return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
          };
          
          Math.ceil = function(number) {
            return (parseInt(number) === number) ? number : parseInt(number) + 1;
          };
          
          Math.floor = function(number) {
            return parseInt(number);
          };`,
          link: "https://www.codewars.com/kata/5267faf57526ea542e0007fb",
        },
        {
          name: { ru: "int32 в IPv4", en: "int32 to IPv4" },
          description: {
            ru:
              "Возьмем следующий IPv4-адрес: 128.32.10.1 Этот адрес имеет 4 октета, где каждый октет представляет собой один байт (или 8 бит). 1-й октет 128 имеет двоичное представление: 10000000 2-й октет 32 имеет двоичное представление: 00100000 3-й октет 10 имеет двоичное представление: 00001010 4-й октет 1 имеет двоичное представление: 00000001 Итак, 128.32.10.1 == 10000000.00100000.00001010.00000001 Поскольку указанный выше IP-адрес имеет 32 бита, мы можем представить его как 32-битное число без знака: 2149583361 Завершите функцию, которая принимает 32-битное число без знака и возвращает строковое представление своего IPv4-адреса. Примеры:",
            en:
              "Take the following IPv4 address: 128.32.10.1 This address has 4 octets where each octet is a single byte (or 8 bits). 1st octet 128 has the binary representation: 10000000 2nd octet 32 has the binary representation: 00100000 3rd octet 10 has the binary representation: 00001010 4th octet 1 has the binary representation: 00000001 So 128.32.10.1 == 10000000.00100000.00001010.00000001 Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361 Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address. Examples:",
          },
          descriptionCode: `2149583361 ==> "128.32.10.1"
32         ==> "0.0.0.32"
0          ==> "0.0.0.0"`,
          solve: `function int32ToIp(int32){
            return int32 === 0 ? '0.0.0.0'
            : int32.toString(2).match(/.{8}/g).map(el => parseInt(el,2)).join('.')
          }`,
          bestPractice: `function int32ToIp(int32){

            return (
                     ((int32 >> 24) & 0xFF) + "." +
                     ((int32 >> 16) & 0xFF) + "." +
                     ((int32 >>  8) & 0xFF) + "." +
                     ((int32) & 0xFF)
                   );
            
           }`,
          link: "https://www.codewars.com/kata/52e88b39ffb6ac53a400022e",
        },
        {
          name: {
            ru: "Извлеките доменное имя из URL",
            en: "Extract the domain name from a URL",
          },
          description: {
            ru:
              "Напишите функцию, которая принимает URL как строку, извлекает из нее доменное имя и возвращает его как строку. Например:",
            en:
              "Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:",
          },
          descriptionCode: `domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"`,
          solve: `function domainName(url){
  
            return  url.replace(/(https|http):\\/\\//, '').replace(/www./,'').split('.')[0]
           }`,
          bestPractice: `function domainName(url){
            url = url.replace("https://", '');
            url = url.replace("http://", '');
            url = url.replace("www.", '');
            return url.split('.')[0];
          };`,
          link: "https://www.codewars.com/kata/514a024011ea4fb54200004b",
        },
        {
          name: {
            ru: "Конвертация из регистра Паскаля в регистр змеи",
            en: "Convert PascalCase string into snake_case",
          },
          description: {
            ru:
              "Завершите функцию/метод, чтобы он принимал строку в регистре Паскаля и возвращал строку в регистре змеи. Входные данные могут быть числами. Если метод получает на входе число, он должен вернуть строку.",
            en:
              "Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string. Examples: ",
          },
          descriptionCode: `"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"`,
          solve: `function toUnderscore(string) {
            return typeof string === "number"
                ? string.toString()
                : string
                    .match(/[A-Z][a-z]+(?:[0-9])*/g)
                    .map((el) => el.toLowerCase())
                    .join("_");
              }`,
          bestPractice: ` var toUnderscore;

          toUnderscore = function(string) {
            return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
          };`,
          link: "https://www.codewars.com/kata/529b418d533b76924600085d",
        },
        {
          name: { ru: "Поросячья Латынь", en: "Simple Pig Latin" },
          description: {
            ru: `Переместите первую букву каждого слова в его конец, затем добавьте «ау» в конец слова. Не трогайте знаки препинания.`,
            en: `Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.`,
          },
          descriptionCode: `Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !`,
          solve: `function pigIt(str){
            return str.replace(/(\\b\\w)(\\w{0,}\\b)/g,  (e, el) => e.slice(1) + '' + el + 'ay')
          }`,
          bestPractice: `function pigIt(str){
            return str.replace(/(\\w)(\\w*)(\\s|$)/g, "\\$2\\$1ay\\$3")
          }`,
          link: "https://www.codewars.com/kata/520b9d2ad5c005041100000f",
        },
        {
          name: { ru: "ROT13", en: "ROT13" },
          description: {
            ru: `Как в АНБ отличить экстраверта от интроверта? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
            Я нашел эту шутку на USENET, но суть ее зашифрована. Может, расшифруешь? Согласно Википедии, ROT13 (http://en.wikipedia.org/wiki/ROT13) часто используется для сокрытия шуток в USENET. Подсказка: для этой задачи вы должны заменять только символы. Не пробелы, знаки препинания, цифры и т. Д. Примеры тестов:`,
            en: `How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
          I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET. Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:`,
          },
          descriptionCode: `rot13("EBG13 rknzcyr.") == "ROT13 example.";
rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"`,
          solve: `function rot13(str) {
            return str.split('').map(e=> {
            if(e.charCodeAt() <= 90 && e.charCodeAt() >= 65){
             return e.charCodeAt() + 13 <= 90 ? String.fromCharCode(e.charCodeAt() + 13) 
             : String.fromCharCode(64 + (e.charCodeAt() + 13 - 90))
            }
            if(e.charCodeAt() <= 122 && e.charCodeAt() >=97 ){
             return e.charCodeAt() + 13 <= 122 ? String.fromCharCode(e.charCodeAt() + 13) 
             : String.fromCharCode(96 + (e.charCodeAt() + 13 - 122))
            }
              return e
            }).join('')
          }
    // In the elevators, the extrovert looks at the OTHER guy's shoes. || В лифте экстраверт смотрит на ботинки ДРУГОГО парня.`,
          bestPractice: `function rot13(str) {
            return str.replace(/[a-z]/ig, function(x){
              return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13: -13));
            });
          }`,
          link: "https://www.codewars.com/kata/52223df9e8f98c7aa7000062",
        },
        {
          name: { ru: "Кодировка Base64", en: "Base64 Encoding" },
          description: {
            ru:
              "Расширьте объект String (JS) или создайте функцию (Python, C #), которая преобразует значение String в Base64 и обратно с использованием набора символов ASCII (UTF-8 для C #). Не используйте встроенные функции.",
            en:
              "Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set. Do not use built in functions.",
          },
          descriptionCode: `// should return 'dGhpcyBpcyBhIHN0cmluZyEh'
'this is a string!!'.toBase64(); 

// should return 'this is a string!!'
'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64(); `,
          solve: `//Extend the String object with toBase64() and fromBase64() functions
          const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
           let arr = str.split('')
           
         String.prototype.toBase64 = function () {
           return this.replace(/./gi, x => '0'.repeat(8-x.charCodeAt().toString(2).length) + x.charCodeAt().toString(2))
            .match(/[a-z0-9+/]{6}/gi)
            .map(el=>arr[parseInt(el,2)]).join('')
         }
         String.prototype.fromBase64 = function () {
           return this.replace(/./gi, x =>  '0'.repeat(6-arr.indexOf(x).toString(2).length) + arr.indexOf(x).toString(2))
            .match(/[a-z0-9+/]{8}/gi)
            .map(el => String.fromCharCode(parseInt(el,2))).join('')
         }`,
          bestPractice: `String.prototype.toBase64 = function() {
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            var encoded = '';
            
            for(var i=0; i < this.length; i+=3) {
              var c1 = this.charCodeAt(i), 
                  c2 = this.charCodeAt(i+1), 
                  c3 = this.charCodeAt(i+2);
              encoded += chars[(c1 & 0xFC) >> 2];
              encoded += chars[((c1 & 0x03) << 4) | ((c2 & 0xF0) >> 4)];
              encoded += chars[((c2 & 0x0F) << 2) | ((c3 & 0xC0) >> 6)];
              encoded += chars[c3 & 0x3F];
            }
            
            return encoded;
          };
          
          String.prototype.fromBase64 = function() {
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            var decoded = '';
            
            for(var i=0; i < this.length; i+=4) {
              var c1 = chars.indexOf(this[i]), 
                  c2 = chars.indexOf(this[i+1]), 
                  c3 = chars.indexOf(this[i+2]),
                  c4 = chars.indexOf(this[i+3]);
              decoded += String.fromCharCode(((c1) << 2) | ((c2 & 0x30) >> 4));
              decoded += String.fromCharCode(((c2 & 0x0F) << 4) | ((c3 & 0xFC) >> 2));
              decoded += String.fromCharCode(((c3 & 0x03) << 6) | c4);
            }
            
            return decoded;
          };`,
          link: "https://www.codewars.com/kata/5270f22f862516c686000161",
        },
      ],
      "4kyu": [
        {
          name: { ru: "Добавление больших чисел", en: "Adding Big Numbers" },
          description: {
            ru:
              "Нам нужно суммировать большие числа, и нам нужна ваша помощь. Напишите функцию, которая возвращает сумму двух чисел. Входные числа являются строками, и функция должна возвращать строку. Пример",
            en:
              "We need to sum big numbers and we require your help. Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string. Example",
          },
          descriptionCode: `add("123", "321"); -> "444"
add("11", "99");   -> "110"`,
          solve: `function add(a, b) {
            let res = ''
            a = a.split('')
            b = b.split('')
            let c = 0
            while (a.length || b.length || c) {
            c += ~~a.pop() + ~~b.pop()
            res = c % 10 + res
            c=c > 9
            }
            return res.replace(/^0+/, '')
            }`,
          bestPractice: `function add (a, b) {
            var res = '', c = 0
            a = a.split('')
            b = b.split('')
            while (a.length || b.length || c) {
              c += ~~a.pop() + ~~b.pop()
              res = c % 10 + res
              c = c > 9
            }
            return res
          }`,
          link: "https://www.codewars.com/kata/525f4206b73515bffb000b21",
        },
        {
          name: {
            ru: "Часто встречаемые слова в тексте",
            en: "Most frequently used words in a text",
          },
          description: {
            ru:
              "Напишите функцию, которая по заданной строке текста (возможно, с пунктуацией и переносами строк) возвращает массив из трех наиболее часто встречающихся слов в порядке убывания количества вхождений. Предположения: слово - это строка букв (от A до Z), которая может содержать один или несколько апострофов (') в ASCII. (Нет необходимости обрабатывать причудливые знаки препинания.) При совпадении регистр не учитывается, а слова в результате должны быть в нижнем регистре. Связи могут быть разорваны произвольно. Если текст содержит менее трех уникальных слов, то должны быть возвращены либо первые 2, либо первое слово, либо пустой массив, если текст не содержит слов. Пример:",
            en:
              "Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences. Assumptions: A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.) Matches should be case-insensitive, and the words in the result should be lowercased. Ties may be broken arbitrarily. If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words. Example: ",
          },
          descriptionCode: `top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]`,
          solve: `const topThreeWords = (text) => {
            let res = []
           if(text.match(/[a-z]/g)) {
             let count = text.toLowerCase().match(/[a-z-']+/g).reduce((acc,el) => {
             acc[el] = (acc[el] || 0) +1
             return acc
           }, {})
             let arr = Object.values(count)
             for(let i=0; i <=2; i++){
               let max = Math.max(...arr)
               for(let [key,value] of Object.entries(count)) {
               value === max ? res.includes(key) ? null : res.length < 3 ? res.push(key) : null: null
             }
              arr.splice(arr.indexOf(max),1) 
             }
           }
           return res
         }`,
          bestPractice: `// 07.09.2018
          let topThreeWords = text => {
              let dict = new Map();
              text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
                  let word = match.toLowerCase();
                  dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
              });
              dict.delete("'");
              return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
          };`,
          link: "https://www.codewars.com/kata/51e056fe544cf36c410000fb",
        },
        {
          name: { ru: "Определитель матрицы", en: "Matrix Determinant" },
          description: {
            ru:
              "Напишите функцию, которая принимает квадратную матрицу (двумерный массив N x N) и возвращает определитель матрицы. Как взять определитель матрицы - проще всего начать с самых маленьких случаев: Матрица 1x1 | a | имеет определитель a. Матрица 2x2 [[a, b], [c, d]] имеет определитель: a * d - b * c. Определитель матрицы размера n x n вычисляется путем сведения задачи к вычислению определителей n матриц размера n-1 x n-1. Для случая 3x3, [[a, b, c], [d, e, f], [g, h, i]] определитель: a * det (a_minor) - b * det (b_minor) + c * det (c_minor), где det (a_minor) означает получение определителя матрицы 2x2, созданной вычеркиванием строки и столбца, в которых встречается элемент a: | - - - | | - е е | | - h i | Обратите внимание на чередование знаков. Аналогично вычисляется определитель больших матриц, например если M - матрица 4x4 с первой строкой [a, b, c, d], то: det (M) = a * det (a_minor) - b * det (b_minor) + c * det (c_minor) - d * det (d_minor)",
            en:
              "Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix. How to take the determinant of a matrix -- it is simplest to start with the smallest cases: A 1x1 matrix |a| has determinant a. A 2x2 matrix [ [a, b], [c, d] ] has determinant: a*d - b*c. The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n matrices ofn-1 x n-1 size. For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs: |- - -| |- e f| |- h i|  Note the alternation of signs. The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], then: det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)",
          },
          descriptionCode: ``,
          solve: `function determinant(m) {
            let n = m.length
            
            if(n=== 1) return m[0][0]
            
            if(n === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0]
            
            let firstRow = m.splice(0,1)[0]
            let res = 0
           
            for(let i=0; i < n; i++){
            res += (-1)**i * firstRow[i] * determinant(m.map(el => el.filter((_,idx)=> idx !== i)))
            }
            return res
          };`,
          bestPractice: `function determinant(m) {
            if (m.length == 0) return 0;
            if (m.length == 1) return m[0][0];
            if (m.length == 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
            if (m.length > 2) {
              return m.reduce((prev, curr, i, arr) => {
                let miniArr = arr.slice(0, i).concat(arr.slice(i + 1)).map(item => item.slice(1));
                return prev + (i % 2 == 0 ? 1 : -1 ) * curr[0] * determinant(miniArr);
              }, 0);
            }
          };`,
          link: "https://www.codewars.com/kata/52a382ee44408cea2500074c",
        },
        {
          name: { ru: "Убрать комментарии", en: "Strip Comments" },
          description: {
            ru: `Завершите решение так, чтобы оно удаляло весь текст, следующий за любым из переданного набора маркеров комментариев. Любые пробелы в конце строки также должны быть удалены.

          Пример:
          Учитывая входную строку:
          apples, pears # and bananas
          grapes
          bananas !apples
          Ожидаемый результат:
          apples, pears
          grapes
          bananas`,
            en: `Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

          Example:
          
          Given an input string of:
          
          apples, pears # and bananas
          grapes
          bananas !apples
          The output expected would be:
          
          apples, pears
          grapes
          bananas
          The code would be called like so:`,
          },
          descriptionCode: `var result = solution("apples, pears # and bananas\\ngrapes\\nbananas !apples", ["#", "!"])
// result should == "apples, pears\\ngrapes\\nbananas"`,
          solve: `function solution(input, markers) {
            return input.split('\\n').map(el=> {
                    for(let i = 0; i<markers.length;i++){
                       if(el.indexOf(markers[i]) !== -1){
                            return el.slice(0,el.indexOf(markers[i])).trim()
                      } 
                    } return el
                 }).join('\\n')
          };`,
          bestPractice: `function solution(input, markers) {
            return input.split('\\n').map(
              line => markers.reduce(
                (line, marker) => line.split(marker)[0].trim(), line
              )
            ).join('\\n')
          }`,
          link: "https://www.codewars.com/kata/51c8e37cee245da6b40000bd",
        },
        {
          name: {
            ru: "Ловить интересные числа",
            en: "Catching Car Mileage Numbers",
          },
          description: {
            ru: `«7777 ... 8?! ??!», Воскликнул Боб, «я снова пропустил! Каждый раз, когда выпадает интересное число, он замечает это и тут же забывает. Кому не нравится ловить эти разовые интересные цифры пробега?

          Давайте сделаем так, чтобы Боб никогда не пропустил еще одно интересное число. Мы взломали компьютер его машины и подключили коробку, которая считывает пробег. У нас есть коробка, которая светится желтым или зеленым в зависимости от того, получает ли он 1 или 2 (соответственно).
          
          Твое дело, бесстрашный воин, склеивать части вместе. Напишите функцию, которая анализирует ввод числа пробега и возвращает 2, если число "интересно" (см. Ниже), 1, если интересное число встречается в пределах следующих двух миль, или 0, если число не интересно.
          
          Примечание. В Haskell мы используем «Нет», «Почти» и «Да» вместо 0, 1 и 2.
          
          «Интересные» номера
          Интересные числа - это трехзначные числа, которые соответствуют одному или нескольким из следующих критериев:
          
          Любая цифра, за которой следуют все нули: 100, 90000
          Число состоит из одинаковых цифр: 1111
          Цифры последовательно возрастающие †: 1234
          Цифры последовательно убывающие ‡: 4321
          Цифры - это палиндром: 1221 или 73837.
          Цифры соответствуют одному из значений в массиве awesomePhrases.
          † Для возрастающих последовательностей 0 должен стоять после 9, а не до 1, как в 7890.
          ‡ Для убывающих последовательностей 0 должен стоять после 1, а не до 9, как в 3210.
          
          Итак, вы должны ожидать этих входов и выходов:`,
            en: `"7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

          Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).
          
          It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.
          
          Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.
          
          "Interesting" Numbers
          Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:
          
          Any digit followed by all zeros: 100, 90000
          Every digit is the same number: 1111
          The digits are sequential, incementing†: 1234
          The digits are sequential, decrementing‡: 4321
          The digits are a palindrome: 1221 or 73837
          The digits match one of the values in the awesomePhrases array
          † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
          ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.
          
          So, you should expect these inputs and outputs:`,
          },
          descriptionCode: `// "boring" numbers
isInteresting(3, [1337, 256]);    // 0
isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
isInteresting(1335, [1337, 256]); // 1
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2`,
          solve: `function isInteresting(number, awesomePhrases,count =0) {
            if(number < 98) {return 0}
            if(number < 100) {
              if(count<2){
                return isInteresting(number+1, awesomePhrases,count+1) ? 1:0}
            }
            let numArr = number.toString().split('')
            let pal = []
            if(numArr.filter(el=>el!=='0').length === 1) {
            return 2
            }
             if(numArr.filter((el,_,arr)=>el===arr[0]).length === numArr.length) {
            return 2
            }
            if(numArr.filter((el,idx,arr)=>+el === 9? 0 === +arr[idx+1]:+el+1 === +arr[idx+1] ).length === numArr.length-1){
            return 2
            }
            if(numArr.filter((el,idx,arr)=>+el-1 === +arr[idx+1] ).length === numArr.length-1){
            return 2
            }
            if(awesomePhrases.includes(number)) {return 2}
            for(let i = numArr.length - 1; i>=0;i--){
              pal.push(numArr[i])
            }
            if(+pal.join('') === number){return 2}
            if(count<2){
              return isInteresting(number+1, awesomePhrases,count+1) ? 1:0}
            return 0
          }`,
          bestPractice: `function isInteresting(number, awesomePhrases) {
            var tests = [
              function(n) { return /^\\d00+$/.test(n); },
              function(n) { return /^(\\d)\\1+$/.test(n); },
              function(n) { return RegExp(n).test(1234567890); },
              function(n) { return RegExp(n).test(9876543210); },
              function(n) { return n + '' == (n + '').split('').reverse().join(''); },
              function(n) { return awesomePhrases.some(function(p) { return p == n; }); }
            ];
            
            var interesting = 0;
            tests.some(function(test) {
              if (number > 99 && test(number))
                return interesting = 2;
              else if ((number > 98 && test(number + 1)) || (number > 97 && test(number + 2)))
                interesting = 1;
            });
            return interesting;
          }`,
          link: "https://www.codewars.com/kata/52c4dd683bfd3b434c000292",
        },
        {
          name: { ru: "Числа Хэмминга", en: "Hamming numbers" },
          description: {
            ru: `Число Хэмминга - это натуральное число вида 2i3j5k для некоторых неотрицательных целых чисел i, j и k.

            Напишите функцию, которая вычисляет n-е наименьшее число Хэмминга.
            
            Конкретно:
            
            Первое наименьшее число Хэмминга 1 = 203050.
            Второе наименьшее число Хэмминга 2 = 213050.
            Третье наименьшее число Хэмминга 3 = 203150.
            Четвертое наименьшее число Хэмминга 4 = 223050.
            Пятое наименьшее число Хэмминга 5 = 203051.
            20 наименьших чисел Хэмминга приведены в примере.
            
            Ваш код должен уметь вычислять все 5000 наименьших (Clojure: 2000, NASM: 13282) чисел Хэмминга без тайм-аута.`,
            en: `A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

          Write a function that computes the nth smallest Hamming number.
          
          Specifically:
          
          The first smallest Hamming number is 1 = 203050
          The second smallest Hamming number is 2 = 213050
          The third smallest Hamming number is 3 = 203150
          The fourth smallest Hamming number is 4 = 223050
          The fifth smallest Hamming number is 5 = 203051
          The 20 smallest Hamming numbers are given in example test fixture.
          
          Your code should be able to compute all of the smallest 5,000 (Clojure: 2000, NASM: 13282) Hamming numbers without timing out.`,
          },
          descriptionCode: ``,
          solve: `function hamming (n) {
            let seq = [1];
            let i2 = 0, i3 = 0, i5 = 0;
            for (let i = 1; i < n; i++) {
              let x = Math.min(2 * seq[i2], 3 * seq[i3], 5 * seq[i5]);
              seq.push(x);
              if (2 * seq[i2] <= x) i2++;
              if (3 * seq[i3] <= x) i3++;
              if (5 * seq[i5] <= x) i5++;
            }
            return seq[n-1];
          }`,
          bestPractice: `function hamming (n) {
            var seq = [1];
            var i2 = 0, i3 = 0, i5 = 0;
            for (var i = 1; i < n; i++) {
              var x = Math.min(2 * seq[i2], 3 * seq[i3], 5 * seq[i5]);
              seq.push(x);
              if (2 * seq[i2] <= x) i2++;
              if (3 * seq[i3] <= x) i3++;
              if (5 * seq[i5] <= x) i5++;
            }
            return seq[n-1];
          }`,
          link: "https://www.codewars.com/kata/526d84b98f428f14a60008da",
        },
        {
          name: {
            ru: "Упрощение полилинейных многочленов",
            en: "Simplifying multilinear polynomials",
          },
          description: {
            ru: `Когда мы учились в средней школе, нас просили упростить математические выражения, такие как «3x-yx + 2xy-x» (или, как правило, больше), и это было легко («2x + xy»). Но скажите это своему компьютеру, и мы увидим!

          Напишите функцию: simpleify, которая принимает на входе строку, представляющую полилинейный непостоянный многочлен в целочисленных коэффициентах (например, «3x-zx + 2xy-x»), и возвращает другую строку в качестве вывода, где то же выражение было упрощено следующим образом (-> означает применение упрощения):
          
          Были выполнены все возможные суммы и вычитание эквивалентных одночленов («xy == yx»), например:
          «cb + cba» -> «bc + abc», «2xy-yx» -> «xy», «-a + 5ab + 3a-c-2a» -> «-c + 5ab»
          
          
          Все одночлены появляются в порядке увеличения числа переменных, например:
          "-abc + 3a + 2ac" -> "3a + 2ac-abc", "xyz-xz" -> "-xz + xyz"
          
          Если два одночлена имеют одинаковое количество переменных, они отображаются в лексикографическом порядке, например:
          "a + ca-ab" -> "a-ab + ac", "xzy + zby" -> "byz + xyz"
          
          Если первый коэффициент положительный, то передний знак + отсутствует, например:
          "-y + x" -> "x-y", но без ограничений для -: "y-x" -> "- x + y"`,
            en: `When we attended middle school were asked to simplify mathematical expressions like "3x-yx+2xy-x" (or usually bigger), and that was easy-peasy ("2x+xy"). But tell that to your pc and we'll see!

          Write a function: simplify, that takes a string in input, representing a multilinear non-constant polynomial in integers coefficients (like "3x-zx+2xy-x"), and returns another string as output where the same expression has been simplified in the following way ( -> means application of simplify):
          
          All possible sums and subtraction of equivalent monomials ("xy==yx") has been done, e.g.:
          "cb+cba" -> "bc+abc", "2xy-yx" -> "xy", "-a+5ab+3a-c-2a" -> "-c+5ab"
          
          
          All monomials appears in order of increasing number of variables, e.g.:
          "-abc+3a+2ac" -> "3a+2ac-abc", "xyz-xz" -> "-xz+xyz"
          
          If two monomials have the same number of variables, they appears in lexicographic order, e.g.:
          "a+ca-ab" -> "a-ab+ac", "xzy+zby" ->"byz+xyz"
          
          There is no leading + sign if the first coefficient is positive, e.g.:
          "-y+x" -> "x-y", but no restrictions for -: "y-x" ->"-x+y"`,
          },
          descriptionCode: ``,
          solve: `function simplify(poly){
 
            let obj = {}
            let str = poly
            if(poly[0] !== '-') str= '+' + str
            str.match(/\\+[A-Z0-9]+|-[A-Z0-9]+/gi)
              //.map(el => el.split('').sort().join(''))
              .forEach(el => {
              let letter = el.replace(/[0-9]/g, '').split('').sort().join('')
              if(el.replace(/\\D/g,'').length > 0) {
                let num = + el.replace(/\\D/g,'')
                obj[letter.slice(1)] = (obj[letter.slice(1)] || 0) +  (el[0] === '-' ?
                -num : num)
              } else {
                 obj[letter.slice(1)] = (obj[letter.slice(1)] || 0) +  (el[0] === '-' ?
                -1 : 1)
              }
            }) 
             let res = Object.keys(obj).filter(e => obj[e] !== 0)
             .sort((a,b)=> b.length === a.length ? a>b :  b.length < a.length)
             .map(el => obj[el]===-1 ? obj[el] + el
                  : '+' + obj[el] + el).join('').replace(/[0-9]+/gi, x => {
               return +x === 1 ? '' : x
             }).replace(/\\+-/g, '-')
            return res[0] === '+'? res.slice(1) : res
          }`,
          bestPractice: `function simplify(poly){
            var h = {};
            poly.match(/[+-]?[^+-]+/g).forEach(x => {
              var m = x.match(/[a-z]+/)[0],
                  k = x.replace(m, '');
              m = m.split('').sort().join('');
              k = Number(/\\d/.test(k) ? k : k+'1');
              h[m] = (h[m]||0) + k;
            });
            return Object.keys(h)
              .filter(m => h[m])
              .sort((x, y) => x.length - y.length || (x < y ? -1 : 1))
              .map((m, i) => ({
                sign : h[m] < 0 ? '-' : i > 0 ? '+' : '',
                k : Math.abs(h[m]),
                m : m
              }))
              .map(o => o.sign + (o.k == 1 ? '' : o.k) + o.m).join('');
          }`,
          link: "https://www.codewars.com/kata/55f89832ac9a66518f000118",
        },
        {
          name: {
            ru: "Валидация судоку с размером `NxN`",
            en: "Validate Sudoku with size `NxN`",
          },
          description: {
            ru: `Правила проверки

            Измерение структуры данных: NxN, где N> 0 и √N == целое число
            Строки могут содержать только целые числа: 1..N (включая N)
            Столбцы могут содержать только целые числа: 1..N (включая N).
            "Маленькие квадраты" (3x3 в примере выше) также могут содержать только целые числа: 1..N (включая N)
            Учитывая структуру данных судоку с размером NxN, N> 0 и √N == integer, напишите метод для проверки правильности заполнения.
Структура данных представляет собой многомерный массив, то есть:`,
            en: `Rules for validation

          Data structure dimension: NxN where N > 0 and √N == integer
          Rows may only contain integers: 1..N (N included)
          Columns may only contain integers: 1..N (N included)
          'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included)
          Given a Sudoku data structure with size NxN, N > 0 and √N == integer, write a method to validate if it has been filled out correctly.
The data structure is a multi-dimensional Array, i.e:`,
          },
          descriptionCode: `[
  [7,8,4,  1,5,9,  3,2,6],
  [5,3,9,  6,7,2,  8,4,1],
  [6,1,2,  4,3,8,  7,5,9],
  
  [9,2,8,  7,1,5,  4,6,3],
  [3,5,7,  8,4,6,  1,9,2],
  [4,6,1,  9,2,3,  5,8,7],
  
  [8,7,6,  3,9,4,  2,1,5],
  [2,4,3,  5,6,1,  9,7,8],
  [1,9,5,  2,8,7,  6,3,4]
]`,
          solve: `var Sudoku = function(data) 
          {
             let row = false
             let col = false
             let len = data[0].length === data.length ?  data.length  : false
             let fckLittleSqr = true
             
            if (len > 1) {
             row = data.map(el=>[...new Set(el)]
                    .reduce((a,b)=>a+b)).filter((el,_,arr)=>el===arr[0]).length === data.length;
              col = data[0].map((val, index) => data.map(row => row[index]).reverse())
                    .map(el=>[...new Set(el)]
                    .reduce((a,b)=>a+b)).filter((el,_,arr)=>el===arr[0]).length === data.length;
            } else {
             row = data[0].length === 1
             col = Number.isInteger(data[0][0]) && data[0][0] === 1
            }
            if(len % 3 === 0) {
              let sum = data[0].reduce((a,b)=>a+b)
              let arr = []
              for (let i = 0; i<3;i++){
                  for (let j = 0; j<3;j++) {
                    arr.push(data[i][j])
                  }
              }
              arr.reduce((a,b)=>a+b) === sum ? fckLittleSqr = true : fckLittleSqr = false
            }
            return {
              isValid: function() {
                if(row && col && fckLittleSqr) return true;
               return false 
              }
            };
          };`,
          bestPractice: `function Sudoku(board) {
            var sqrt = Math.sqrt(board.length);
            var esum = board.length * (board.length + 1) / 2;
          
            function checkDigits(selection) {
              return selection.reduce(function(sum, digit) {
                return typeof digit == 'number' ? sum + digit : NaN;
              }, 0) == esum;
            }
          
            return {
              isValid: function() {
                return board.every(function(row, i) {
                  return checkDigits(row) &&
                         checkDigits(board.map(function(row) {
                           return row[i];
                         })) &&
                         checkDigits(board.map(function(_, j) {
                           return board[(i/sqrt|0)*sqrt+(j/sqrt|0)][i%sqrt*sqrt+j%sqrt];
                         }));
                });
              }
            };
          }`,
          link: "https://www.codewars.com/kata/540afbe2dc9f615d5e000425",
        },
        {
          name: { ru: "Сколько чисел III?", en: "How many numbers III?" },
          description: {
            ru: `Мы хотим сгенерировать все числа из трех цифр, где:

            сумма их цифр равна 10.
            
            их цифры расположены в возрастающем порядке (числа могут состоять из двух или более равных смежных цифр)
            
            Числа, которые соответствуют двум вышеуказанным ограничениям: 118, 127, 136, 145, 226, 235, 244, 334.
            
            Создайте функцию, которая принимает два аргумента:
            
            сумма цифр значение
            
            желаемое количество цифр для номеров
            
            Функция должна вывести массив с тремя значениями: [1,2,3]
            
            1 - общее количество возможных чисел
            
            2 - минимальное количество
            
            3 - максимальное количество
            Особенности случайных тестов:

Количество тестов: 112
Сумма цифр от 20 до 65
Количество цифр от 2 до 17`,
            en: `We want to generate all the numbers of three digits where:

          the sum of their digits is equal to 10.
          
          their digits are in increasing order (the numbers may have two or more equal contiguous digits)
          
          The numbers that fulfill the two above constraints are: 118, 127, 136, 145, 226, 235, 244, 334
          
          Make a function that receives two arguments:
          
          the sum of digits value
          
          the desired number of digits for the numbers
          
          The function should output an array with three values: [1,2,3]
          
          1 - the total number of possible numbers
          
          2 - the minimum number
          
          3 - the maximum number
          Features of the random tests:

Number of tests: 112
Sum of digits value between 20 and 65
Amount of digits between 2 and 17
         `,
          },
          descriptionCode: `The example given above should be:

findAll(10, 3) => [8, "118", "334"]
If we have only one possible number as a solution, it should output a result like the one below:

findAll(27, 3) => [1, "999", "999"]
If there are no possible numbers, the function should output the empty array.

findAll(84, 4) => []
The number of solutions climbs up when the number of digits increases.

findAll(35, 6) => [123, '116999', '566666']`,
          solve: `function findAll(n, k) {
            if(n/k > 9)return [];
            if(n/k === 9)return [1,'9'.repeat(k),'9'.repeat(k)]
          let current = n-k
          let arr = new Array(k).fill(1)
          arr = arr.map(el=> {
            if(current - 9 >= 0) {
              current -= 8
              return 9
            }
            else {
              let i = current
              current = 0
              return el + i
            } 
          }).reverse() 
          let xz = Math.ceil(n/k)
          let subarr = new Array(k).fill(xz).reduce((a,b)=> a+b,0) - n
          let max
          if(subarr > 0){
              max = new Array(subarr).fill(xz-1).concat(new Array(k-subarr).fill(xz))
          } 
          if(subarr === 0) max = new Array(k).fill(xz)
          let min = arr.join('')
          max = max.join('')
          function findCount(n,k,c=1) {
            if(n>k*9)return 0;
            if(k===1)return 1;
            let count = 0;
            for(let i=c; i<=~~(n/k); i++) count += findCount(n-i,k-1,i);
            return count;
            }
        return [findCount(n,k),min,max]
        }`,
          bestPractice: `function findAll(n,k,min=1) {
            if(n<min*k || n>9*k)
              return [];
            if(k===1)
              return [1,String(n),String(n)];
            var counter=0;
            var minimum="9".repeat(k);
            var maximum="0".repeat(k);
            for(var i=min;i<=9;i++){
              var current=findAll(n-i,k-1,i);
              if(current.length>0){
                counter+=current[0];
                if(i+current[1]<minimum)
                  minimum=i+current[1];
                if(i+current[2]>maximum)
                  maximum=i+current[2];
              }
            }
            return [counter,minimum,maximum];
          }`,
          link: "https://www.codewars.com/kata/5877e7d568909e5ff90017e6",
        },
        {
          name: { ru: "Внедрение зависимости", en: "Dependency Injection" },
          description: {
            ru: `Вы слышали о шаблоне внедрения зависимостей? Основная идея этого шаблона заключается в том, что у вас может быть возможность передавать зависимости в вашу функцию в любом порядке, и они будут разрешены автоматически. Взгляните на это:
            Как видите, мы просто добавляем некоторые переменные в сигнатуру функции и работаем с ними как обычно. Но мы ничего не знаем о том, где находятся эти переменные! Предположим, что все зависимости хранятся в одном хеш-объекте (например, deps), а функция инжектора будет искать среди свойств deps:
            Хорошо, я надеюсь, что это ясно. Также, чтобы настроить DependencyInjector (DI), нам нужно указать объект зависимости:
            Ваша задача - создать метод DI.prototype.inject, который вернет новую функцию с разрешенными зависимостями. И не забывайте о вложенных функциях. Не трогай их.`,
            en: `Did you hear about Dependency Injection pattern? The main idea of this pattern is that you may have ability to pass dependencies into your function in any order and they will be resolved automatically. Take a look at this:
          As you can see we just put some variables into the function's signature and work with them as usualy. But we know nothing about where these variables are located! Let's assume that all dependencies are stored in the single hash object (for instanse 'deps') and the injector function will be sought among 'deps' properties:
          Ok, I hope this is clear. Also, in order to setup DependencyInjector (DI) we need to specify dependency object:
          Your task is create DI.prototype.inject method that will return a new function with resolved dependencies. And don't forget about nested functions. You shouldn't handle them.`,
          },
          descriptionCode: `var myDependentFunc = inject(function (secondDepency, firstDependency) {
  firstDependency();
  secondDepency();
});

myDependentFunc();


var deps = {
  'firstDependency': function () {return 'this is firstDependency';},
  'secondDepency': function () {return 'this is secondDepency';},
};

var DI = function (dependency) {
  this.dependency = dependency;
};`,
          solve: `var DI = function (dependency) {
            this.dependency = dependency;
          };
          
          // Should return new function with resolved dependencies
          DI.prototype.inject = function (func) {
            let pros = func.toString().match(/function \\((.+)\\)/)
          
            return pros ? func.bind(func,...pros[1].split(', ').map(el=>this.dependency[el])) : func
          }`,
          bestPractice: `
          /**
          * Constructor DependencyInjector
          * @param {Object} - object with dependencies
          */
         var DI = function (dependency) {
           this.dependency = dependency;
         };
         
         // Should return new function with resolved dependencies
         DI.prototype.inject = function (func) {
         
           var deps = /^[^(]+\\(([^)]+)/.exec(func.toString());
           
           deps = deps ? deps[1]
             .split(/\\s?,\\s?/)
             .map(function (dep) {
               return this.dependency[dep];
             }.bind(this)) : [];
           
           return function () {
             return func.apply(this, deps);
           };
         
         }`,
          link: "https://www.codewars.com/kata/5302d655be2a91068b0001fb",
        },
        {
          name: { ru: "-Разверни его, быстрее!", en: "-Reverse it, quickly!" },
          description: {
            ru: `Как правило, реверсирование массива - довольно простая задача даже для начинающих программистов. Но только не тогда, когда толпа разъяренных зомби царапает вашу дверь в поисках свежих мозгов. В этом случае даже опытный ниндзя-компьютерщик, вероятно, предпочтет быстро выложить свой код на github, чтобы успеть найти бензопилу. Итак, есть два препятствия:

            Ваш код должен быть как можно короче, фактически не длиннее 28 символов.
            Поскольку вы напуганы и напряжены, вы забыли, как использовать стандартный метод reverse ().
            #Input: массив, содержащий данные любых типов. Пример: [1,2,3, 'a', 'b', 'c', []] # Выход: [[], 'c', 'b', 'a', 3,2,1]`,
            en: `Typically, reversing an array is a pretty straightforward task even for novice programmers. But not when a crowd of angry zombies scratching your door, looking for a fresh brains. In this case even skilled ninja-geek probably prefer to quickly push his code on github to have enough time to find a chainsaw. So there's two obstacles:

          Your code needs to be as short as possible, in fact not longer than 28 characters
          Because you are scared and stressed you have forgotten how to use the standard reverse() method
          #Input: an array containing data of any types. Ex: [1,2,3,'a','b','c',[]] #Output: [[],'c','b','a',3,2,1]`,
          },
          descriptionCode: ``,
          solve: `weirdReverse=a=>a.sort(_=>1)`,
          bestPractice: `weirdReverse=a=>a.sort(_=>1)`,
          link: "https://www.codewars.com/kata/59ae589c07157afba80000a7",
        },
        {
          name: { ru: "parseInt(). Перезагрузка", en: "parseInt() reloaded" },
          description: {
            ru: `В этом ката мы хотим преобразовать строку в целое число. Строки просто представляют числа словами.

          Примеры:
          
          "один" => 1
          "двадцать" => 20
          "двести сорок шесть" => 246
          "семьсот восемьдесят три тысячи девятьсот девятнадцать" => 783919
          Дополнительные замечания:
          
          Минимальное число - «ноль» (включительно)
          Максимальное число, которое должно поддерживаться - 1 миллион (включительно).
          «И», например, «сто И двадцать четыре» не является обязательным, в некоторых случаях оно присутствует, а в других - нет.
          Все проверенные числа действительны, подтверждать их не нужно.`,
            en: `In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

            Examples:
            
            "one" => 1
            "twenty" => 20
            "two hundred forty-six" => 246
            "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
            Additional Notes:
            
            The minimum number is "zero" (inclusively)
            The maximum number, which must be supported is 1 million (inclusively)
            The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
            All tested numbers are valid, you don't need to validate them`,
          },
          descriptionCode: ``,
          solve: `const words = {
            "zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9, 
            "ten":10, "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16, 
            "seventeen":17, "eighteen":18, "nineteen":19, "twenty":20, "thirty":30, "forty":40, "fifty":50, 
            "sixty":60, "seventy":70, "eighty":80, "ninety":90
          };
          const mult = { "hundred":100, "thousand":1000, "million": 1000000 };
          
          const parseInt = (str) => {
            return str.split(/\\s|-/).reduce((value,word)=> {
                if(words[word]) value += words[word]
                if(mult[word]) value += mult[word] * (value % mult[word]) - (value % mult[word])
              return value
            },0)
          }`,
          bestPractice: `var words = {
            "zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9, 
            "ten":10, "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16, 
            "seventeen":17, "eighteen":18, "nineteen":19, "twenty":20, "thirty":30, "forty":40, "fifty":50, 
            "sixty":60, "seventy":70, "eighty":80, "ninety":90
          };
          var mult = { "hundred":100, "thousand":1000, "million": 1000000 };
          function parseInt(str) {
            return str.split(/ |-/).reduce(function(value, word) {
              if (words[word]) value += words[word];
              if (mult[word]) value += mult[word] * (value % mult[word]) - (value % mult[word]);
              return value;
            },0);
          }`,
          link: "https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5",
        },
      ],
      "3kyu": [
        {
          name: {
            ru: "Последняя цифра огромного числа",
            en: "Last digit of a huge number",
          },
          description: {
            ru: `Для данного списка [x1, x2, x3, ..., xn] вычислить последнюю (десятичную) цифру x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

          Например,
          
          lastDigit ([3, 4, 2]) === 1
          потому что 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.
          
          Осторожно: силы растут невероятно быстро. Например, 9 ^ (9 ^ 9) содержит более 369 миллионов цифр. lastDigit должен эффективно работать с такими числами.
          
          Частные случаи: мы предполагаем, что 0 ^ 0 = 1 и последняя цифра пустого списка равна 1.
          `,
            en: `For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

            E. g.,
            
            lastDigit([3, 4, 2]) === 1
            because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.
            
            Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers efficiently.
            
            Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.
            
            This kata generalizes Last digit of a large number; you may find useful to solve it beforehand.`,
          },
          descriptionCode: ``,
          solve: `function trueMod(a, n, m) {
            return Math.round( (a % m) * Math.pow( (a % m), (n + 3) % 4 ) ) % m;
        }
        
        function lastDigit(as){
            if (as.length == 0) return 1;
            let rightIsZero = false;
            let rightBiggerThan2 = false;
            let rightMod4 = 1;
            for (let i = as.length - 1; i > 0; --i) {
                if (rightIsZero) {
                    rightMod4 = 1;
                    rightIsZero = false;
                    rightBiggerThan2 = false;
                } else {
                    rightMod4 =(rightBiggerThan2 && (as[i] % 4 === 2)) ? 0 : trueMod(as[i], rightMod4, 4);
                     rightIsZero = as[i] === 0;
                    rightBiggerThan2 = !rightIsZero && !(as[i] === 1)
                }
            }
            return rightIsZero ? 1 : trueMod(as[0], rightMod4, 10);
        }`,
          bestPractice: `function lastDigit (as){
            return as.reduceRight((prev, curr, i) => {
              let exp = prev < 4 ?
                prev :
                (prev % 4 + 4);
          
              let base = i === 0 ?
                (curr % 10) :
                (curr < 4 ? curr : (curr % 4 + 4));
          
              return Math.pow(base, exp);
            }, 1) % 10;
          }`,
          link: "https://www.codewars.com/kata/5518a860a73e708c0a000027",
        },
      ],
      "2kyu": "",
      "1kyu": "",
    },
  },
  mutations: {},
  actions: {},
  getters: {
    getTasks: (s) => s.tasks,
  },
};

# MMM-CountDown
![Screenshot](screenshots/screenshot.png)

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/) which can count down the days to a date/event.

I've never written anything with Node.js before, so hopefully this isn't a total mess, if it is - feel free to lend a hand :)

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:

```js
var config = {
    modules: [
        {
            module: 'MMM-CountDown',
            config: {
                // See configuration options
            }
        }
    ]
}
```

## Configuration options

| Option           | Description                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| `position`       | *Required* Where do you want to place the counter (use standard magicmirror counter)                                                   |
| `date`           | *Required* Date to count down to (YYYY-MM-DD HH:MM:SS)                                                                |
| `showHours`      | Decide whether or not to display the hours. Default is true                                                           |
| `showMinutes`    | Decide whether or not to display the minutes. Default is true                                                         |
| `showSeconds`    | Decide whether or not to display the seconds. Default is true                                                         |
| `customInterval` | Change the update interval which will help reduce load if you are only showing specific time metrics. Default is 1000 |
| `icon`           | Choose a Font Awesome [icon](https://fontawesome.com/v5/icons/beer?s=solid) to display in front of the timer. Default is none                                                          |
| `iconColor`      | Choose the color of the item. Default is withe                                                         |

If either of the above are missing, the module will count down to the New Millenium (3000-01-01)

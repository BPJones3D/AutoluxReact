# AutoluxReact
This is the _**front-end**_ side of Autolux, an online car dealership website.

# Current Features
- Cars for sale list
- Filters:
  - sort by (select/dropdown) with order button (ascending/descending) 
  - search by name (text input)
  - transmission (checklist)
  - fuel type (checklist)
  - year (double slider)
  - price (double slider)
  - miles (double slider)
  - mpg (double slider)
  - tank capacity (double slider)
  - ev range (double slider)
  - seats (double slider)
  - doors (double slider)
  - brand (checklist)
- Individual car page details
- Admin Pages:
  - Browse Cars
  - Edit Car
  - Delete Car
  - Add Car
 
# Todo Backlog
- Login Page (for admin)
- Search paging
- Basic home page
- Basic about page
- Basic contact page
- Car list view modes (list / tiles / minimal)

# Known issues
- The "return" button on preview page doesn't return to the admin page
- Creating a car takes the user to the default page, this should be either the admin car list
- There is no indication for what details are missing when submitting an invalid car
- Logging out should refresh the whole site, without the admin data
- Clicking "admin page" button 3+ times before logging out will not take the user back to the home page

# Gallery
![Car list default](https://i.imgur.com/9A74oEC.png)
![Car list with filtering](https://i.imgur.com/XHB7Cy4.png)
![Car details 1](https://i.imgur.com/tqIq3ZM.png)
![Car details 2](https://i.imgur.com/Qa2ZJyl.png)
![Car details collapsed](https://i.imgur.com/WpNP2qn.png)
![Admin browse page](https://i.imgur.com/gppdhwi.png)
![Admin edit page](https://i.imgur.com/aCCMkG5.png)
![Admin add new car page](https://i.imgur.com/j6c5iYx.png)


# Database example
| Id            | Brand         | Name  | Year | Price | Colour | Description | DoorCount | FuelType | Miles | MilesPerGallon | SeatCount | TankCapacity | Transmission |
| ------------- | ------------- | ----- | ---- | ----- | ------ | ----------- | --------- | -------- | ----- | -------------- | --------- | ------------ | ------------ |
|1|Ford|Focus ST|2020|34242|Red|None|3|Petrol|23400|52.2|4|52|Manual|

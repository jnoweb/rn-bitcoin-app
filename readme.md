# RN Bitcoin App
This app displays bitcoin latest blocks and transactions. For querying data this uses bitquery graphql api (https://bitquery.io/labs/graphql).

## Prerequisites

Before you begin, install the latest versions of:

- Xcode for running on IOS
- Android Studio for running on Android
- Nodejs 
- Yarn


## Run project locally

- **Open a terminal** on your computer and `cd` into your preferred `path/location`.
- **Clone repo:** To do this, run the following command on your **terminal**

```
git clone https://github.com/jnoweb/rn-bitcoin-app.git
```

- **Navigate to the cloned directory and install dependencies:** Run the following command:

```
yarn install
```

- **Start application:** Run the following command:

```
yarn start
```

- ** On the browser expo window, select the platform you wish to run this application on.


## Testing

We could have unit tests in the application using jest and enzyme to test our components and application logic.


## Bonus Points

Improved performance by implementing caching. Apollo handles this. To prevent users from viewing stale data we invalidate the cache every 5s.

## Contact

If you want to contact me you can reach me at <i.am@jnoweb.com>.

## License
<!--- If you're not sure which open license to use see https://choosealicense.com/--->

This project uses the following license: [MIT License](LICENSE).

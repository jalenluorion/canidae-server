const InfiniteCampus = require('infinite-campus')
// log in                          District Name    State  Username  Password
const user = new InfiniteCampus('Boise School District', 'Id', '25jalen.lu@boiseschools.net', 'applecomputer')

// wait until we are done logging in
user.on('ready', () => {
  // now that we are logged in...
  
  // get grades from all courses, returns an array of terms containing class information (see docs)
  user.getCourses().then((terms) => {
    console.log(terms)
    // [{name:"Q1", courses: [{name: "1 English", grades:{}, ...}, ...]}, ... ]
  })
  
  // get the last 20 notifications
  user.getNotifications(20).then((notifications) => {
    console.log(notifications)
    // [{id: "1111", test: "BOB recieved a new grade of A", timestamp: 1234, read: false, ... }, ...]
    
	// then mark all notifications as read
	user.markAllNotificationsRead().then(() => {
	    console.log('notifications marked as read...')
    })

  })

	
})


// listen for any errors thrown while logging in
user.on('error', (err) => {
	console.log('Error while Logging in. Bad credentials.' + err)
})
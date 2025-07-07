# Features:
1. user register, login , dashboard view
2. credit system 3$-5$/app. after admin approval testing will start. buy more credits.
3. user can see app status: 
    waiting for approval(If any issue mail/report), Started, In progress, Production ready. Eevery status change mail trigger. 
4. profile update, contact form for with tester TL.

# Admin Features: 
1. Global access to super admin. 
2. register/login of members. 
3. Person Name - Project => assign memeber. 
4. track total app orders, revenue, progress report in mail/pdf. 

===============================
## Documents Structure

```
Users
_id
first name
last name
email
password
pri_phone
sec_phone
role
active
credits
```

```
Apps
_id
name
test_url
app_file_url
app_icon
instructions
user_id => relate to user id
testers_id => related to tester object id
```

```
App Status
_id
status
```

```
Tickets
_id
name
images
```

```
Files
_id
file_name
date_time
user_id ==> link to either User's, Admins, testers object id.
```

```
Admins
_id
first name
last name
email
password
active
```

```
Testers
_id
first name
last name
email
password
active
```







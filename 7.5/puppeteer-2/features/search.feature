Feature: Booking tickets
	Scenario: One seat order
		Given user is on "http://qamid.tmweb.ru/client/index.php" page
		When user choose next day
		When user choose time
		When user select row 4 and seat 5
		When user click button
		Then user see "Покажите QR-код нашему контроллеру для подтверждения бронирования."

	Scenario: Some seat order
		Given user is on "http://qamid.tmweb.ru/client/index.php" page
		When user choose next day
		When user choose time
		When user select row 4 and seat 6
        When user select row 4 and seat 7
        When user select row 4 and seat 8
		When user click button
		Then user see "Покажите QR-код нашему контроллеру для подтверждения бронирования."

	Scenario: Reserved seat order
		Given user is on "http://qamid.tmweb.ru/client/index.php" page
		When user choose next day
		When user choose time
		When user select row 4 and seat 5
		Then user see button disabled 'true'
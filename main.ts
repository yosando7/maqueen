basic.showIcon(IconNames.Heart)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 51)
basic.pause(1000)
maqueen.motorStop(maqueen.Motors.All)
basic.pause(1000)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 51)
basic.pause(1000)
maqueen.motorStop(maqueen.Motors.All)
basic.showIcon(IconNames.No)
basic.forever(function () {
	
})

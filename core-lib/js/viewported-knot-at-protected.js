

function Pencil() {
    let that = this
    let scene = this

    let chosenScene = null
    let queueKnot = []

    that.constructKnot = function () {
        // use viewported-knot-at-protected-knot
        // is it same pencil? yes, it is same pencil
        window['@pencil/cubic-project']
        window['@pencil/cubic-project/scene-focus']
    }

    that.connectKnotToBottomStatement = function (knotInstance, bottomStatement) {
        // keep bottomStatement.connectTo(bottomStatement.providePointerBelongingsAt(knotInstance.pointerBelongings.y, knotInstance.pointerBelongings.x, knotInstance.pointerBelongings.z), knotInstance)
        // are you reading from left to right?

        bottomStatement.connectTo(
            bottomStatement.providePointerBelongingsAt(knotInstance.pointerBelongingsAtTopLeft.y, knotInstance.pointerBelongingsAtTopLeft.x, knotInstance.pointerBelongingsAtTopLeft.z),
            bottomStatement.providePointerBelongingsAt(knotInstance.pointerBelongingsAtBottomLeft.y, knotInstance.pointerBelongingsAtBottomLeft.x, knotInstance.pointerBelongingsAtBottomLeft.z),
            bottomStatement.providePointerBelongingsAt(knotInstance.pointerBelongingsAtRightBottom.y, knotInstance.pointerBelongingsAtRightBottom.x, knotInstance.pointerBelongingsAtRightBottom.z),
            bottomStatement.providePointerBelongingsAt(knotInstance.pointerBelongingsAtRightTop.y, knotInstance.pointerBelongingsAtRightTop.x, knotInstance.pointerBelongingsAtRightTop.z),
            knotInstance
        )
    }

    that.putKnotConnectedToBottomStatement = function (knot) {
        // keep bottomStatement.bottomProjectionContains
        queueKnot.push(knot)
    }

    that.useScene = function (providedScene) {
        chosenScene = providedScene
    }

    that.provideScene = function () {
        return scene
    }

    that.drawViewport = function () {

    }
}

function DraftFabrikk() {
    let that = this

    that.constructViewport = function () {

    }

    that.constructBottomStatement = function () {

    }

    that.connectKnotToBottomStatement = function () {

    }
}
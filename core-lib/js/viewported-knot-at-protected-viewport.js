
// keep
// use #sticked-album-in-queued-sequence, pointerBelongingsAtScene2

function ViewportProvider() {

}

function ViewportAtScene() {

}

function BottomStatement() {
    let that = this

    let bottomStatement
    let pointerBelongingsAtTopLeft
    let pointerBelongingsAtBottomLeft
    let pointerBelongingsAtRightBottom
    let pointerBelongingsAtRightTop

    let connectedToBottomStatement = {}

    that.connectTo = function (pointerBelongings, knot) {
        connectedToBottomStatement[pointerBelongings] = knot
    }
    that.providePointerBelongingsAt = function (pointerBelongingsY, pointerBelongingsX, pointerBelongingsZ) {

    }

    that.bottomProjectionContains = function (knotInstance) {
        // that's' knot possible to take area of knotInstance
        // cause we are using pointerBelongings
        // but my "hand" may solve that task (i may "draw" and use vertical-bounce-handler)

        // but "nlp" decided that they wanted to do reverse engineering
        // they just do highly "coupling" with "mind"

        // that's issue

        // when we are using queueKnot then it's possible
        // but we lost "uniqueness" cause we wanted to know pointerBelongings

        // we are knot immortal, i am knot immortal
        // but why you prefer professor konev's knot? knot of gamedev?
    }
}
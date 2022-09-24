
// keep

// let me use #scene-focus
// let me use #sticked-album-with-double-pointer-belongings to choose scene

let spawnedPointerBelongingsCharacter = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1 * 4 * 2, 1 * 3 + 0.5 + 0.5 + 0.5 + 0.5 + 0.5, 1 * 2)
let knotCharacter = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1, 1, 1)
pencil.useKnot(knotCharacter)

// keep
pencil.useSpawn(spawnedPointerBelongingsCharacter)

pencil.draw()

// character frame
// keep
for(let i = 1; i <= Array.from(Array(4)).length; i++) {
    let spawnedPointerBelongingsCharacterFocusFrame = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1 * 4 * 2, 1 * 3 + 0.5 + 0.5 + 0.5 + 0.5 + 0.5 + 1 * i + 0.5 * i, 1 * 2)
    let knotCharacterFocusFrame = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1, 1 * 0.2, 1)
    pencil.useKnot(knotCharacterFocusFrame)

    // keep
    pencil.useSpawn(spawnedPointerBelongingsCharacterFocusFrame)

    pencil.draw()
}

// chosen focus
let spawnedPointerBelongingsCharacterChosenFocusAtTopRight = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1 * 4 * 2 + 0.5, 1 * 3 * 2 * 1.4 + 0.5 * 4, 1 * 2 + 0.5 + 0.5)
let knotCharacterChosenFocusAtTopRight = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1, 1 * 0.2, 1)
pencil.useKnot(knotCharacterChosenFocusAtTopRight)

// keep
pencil.useSpawn(spawnedPointerBelongingsCharacterChosenFocusAtTopRight)

pencil.draw()

// keep
let spawnedPointerBelongingsCharacterChosenFocusAtTopLeft = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1 * 4 * 2 + 0.5, 2 * 1 + 0.5, 1 * 2 + 0.5 + 0.5)
let knotCharacterChosenFocusAtTopLeft = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1, 1 * 0.2, 1)
pencil.useKnot(knotCharacterChosenFocusAtTopLeft)

// keep
pencil.useSpawn(spawnedPointerBelongingsCharacterChosenFocusAtTopLeft)

pencil.draw()

// keep !
let spawnedPointerBelongingsCharacterChosenFocusAtBottom = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1 * 2 + 0.5, 2 * 1 + 0.5, 1 * 2 + 0.5 + 0.5)
let knotCharacterChosenFocusAtBottom = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1, 1 * 0.2, 1)
pencil.useKnot(knotCharacterChosenFocusAtBottom)

// keep
pencil.useSpawn(spawnedPointerBelongingsCharacterChosenFocusAtBottom)

pencil.draw()

// keep !
let spawnedPointerBelongingsCharacterChosenFocusAtRight = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1 * 2 + 0.5, 2 * 2 * 1.4 + 0.5 + 0.5, 1 * 2 + 0.5 + 0.4)
let knotCharacterChosenFocusAtRight = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1, 1 * 0.2, 1)
pencil.useKnot(knotCharacterChosenFocusAtRight)

// keep
pencil.useSpawn(spawnedPointerBelongingsCharacterChosenFocusAtRight)

pencil.draw()

window['@pencil/cubic-project/scene-focus'] = JSON.parse(JSON.stringify(pencil))
//


//

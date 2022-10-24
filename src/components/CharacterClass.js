function CharacterClass({ characterClass, handleClassChange }) {
  return (
    <div className="background">
      <p className="background__header">Class:</p>
      {characterClass === "Armed" ? (
        <>
          <p className="background__text background__text-alt">
            Exploration Score: 3
          </p>
          <p className="background__text background__text-alt">
            Combat Score: 4
          </p>
          <p className="background__text background__text-alt">
            The Armed quite literally have an arm from a Rook connected to them
            via a complex ritual, attuning its intention to them. The Armed are
            proficient in melee combat and are highly capable adventurers. They
            are warriors. An Armed adventurer could have any type of arm; a
            blade, a hand, a cannon, a strange machine the user doesn’t yet
            understand. If the arm has a hand or the ability to hold items, it
            can be used to carry an additional weapon if you have one.
          </p>
          <label className="background__form-label">
            <input
              type="radio"
              value=""
              name="cclass"
              onChange={handleClassChange}
            />
            Reset
          </label>
        </>
      ) : characterClass === "Followed" ? (
        <>
          <p className="background__text background__text-alt">
            Exploration Score: 5
          </p>
          <p className="background__text background__text-alt">
            Combat Score: 3
          </p>
          <p className="background__text background__text-alt">
            The Followed have a small Rook companion, like a pet or familiar
            that follows them and their commands. These ‘Rooklings’ are found in
            the cores of larger Rooks - as yet it is not known why. They display
            a base level of sentience akin to that of a dog or a cat and can
            form deep and personal bonds with their human companions. The
            Followed are excellent rangers, pathfinders and navigators.
          </p>
          <label className="background__form-label">
            <input
              type="radio"
              value=""
              name="cclass"
              onChange={handleClassChange}
            />
            Reset
          </label>
        </>
      ) : characterClass === "Helmed" ? (
        <>
          <p className="background__text background__text-alt">
            Exploration Score: 2
          </p>
          <p className="background__text background__text-alt">
            Combat Score: 5
          </p>
          <p className="background__text background__text-alt">
            The Helmed harvest a piece of strange machinery from the very core
            of a Rook and, using rituals and a real working understanding of the
            crystal patterns and stones, they are able to create a Helm that can
            be worn and operated, granting them the magical abilities of the
            Rook it was harvested from.
          </p>
          <label className="background__form-label">
            <input
              type="radio"
              value=""
              name="cclass"
              onChange={handleClassChange}
            />
            Reset
          </label>
        </>
      ) : characterClass === "Mounted" ? (
        <>
          <p className="background__text background__text-alt">
            Exploration Score: 5
          </p>
          <p className="background__text background__text-alt">
            Combat Score: 2
          </p>
          <p className="background__text background__text-alt">
            The Mounted ride an adapted mechanism taken from Rook parts, as a
            vehicle or mount to allow them easier traversal across the land and
            sea of the Colostle. Typically this involves taking a part of the
            Rook responsible for it’s locomotion and disconnecting it from the
            main body, and turning it into something that can be operated with
            crude controls, mechanisms and levers. The Mounted’s mounts can vary
            from horse-like creatures to boats and even bikes.
          </p>
          <label className="background__form-label">
            <input
              type="radio"
              value=""
              name="cclass"
              onChange={handleClassChange}
            />
            Reset
          </label>
        </>
      ) : (
        <form className="background__form">
          <label className="background__form-label">
            <input
              type="radio"
              value="Armed"
              name="cclass"
              onChange={handleClassChange}
            />
            Armed
          </label>
          <label className="background__form-label">
            <input
              type="radio"
              value="Followed"
              name="cclass"
              onChange={handleClassChange}
            />
            Followed
          </label>
          <label className="background__form-label">
            <input
              type="radio"
              value="Helmed"
              name="cclass"
              onChange={handleClassChange}
            />
            Helmed
          </label>
          <label className="background__form-label">
            <input
              type="radio"
              value="Mounted"
              name="cclass"
              onChange={handleClassChange}
            />
            Mounted
          </label>
        </form>
      )}
    </div>
  );
}

export default CharacterClass;

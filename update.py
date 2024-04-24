import sys
import logging
import os
import jinja2

TEMPLATE_FILE = "overall.html.jinja2"
OUTPUT_FILE = "index.html"


class Field:
    def __init__(self, name: str):
        self.name = name.lower()

    @property
    def id(self) -> str:
        return self.name.replace(" ", "-")

    @property
    def label(self) -> str:
        return self.name.capitalize()

    @property
    def variable(self) -> str:
        first, *others = self.name.split(" ")
        return "".join([first.lower(), *map(str.capitalize, others)])


class IdentityField(Field):
    def __init__(
        self,
        name: str,
        placeholder: str | None = None,
        datalist: list[str] | None = None,
        unitlist: list[str] | None = None,
    ):
        super().__init__(name)
        self.placeholder = name if placeholder is None else placeholder
        self.datalist = datalist
        self.unitlist = unitlist


IDENTITY_FIELDS: list[IdentityField] = [
    IdentityField("name"),
    IdentityField("surname"),
    IdentityField("age"),
    IdentityField(
        "race",
        datalist=[
            "Aslan",
            "Droyne",
            "Hivers",
            "K'kree",
            "Vargr",
            "Humaniti-Solomani",
            "Humaniti-Vilani",
            "Humaniti-Zhodani",
        ],
    ),
    IdentityField("traits"),
    IdentityField("homeworld"),
    IdentityField("rads", unitlist=["mrad/h", "rad/h", "krad/h"]),
]


class CharacteristicField(Field):
    def __init__(self, name: str):
        super().__init__(name)


CHARACTERISTICS_FIELDS: list[CharacteristicField] = [
    CharacteristicField("strength"),
    CharacteristicField("dexterity"),
    CharacteristicField("constitution"),
    CharacteristicField("intellect"),
    CharacteristicField("education"),
    CharacteristicField("social"),
]


class SkillField(Field):
    def __init__(self, name: str, option: str | None = None):
        super().__init__(name)
        self.option = option if option else ""
        if self.option:
            self.fullname = self.name + "(" + self.option + ")"
        else:
            self.fullname = self.name


SKILLS_FIELDS: list[SkillField] = [
    SkillField("admin"),
    SkillField("advocate"),
    SkillField("animals"),
    SkillField("animals", "cat"),
    SkillField("animals", "dog"),
    SkillField("athletics"),
    SkillField("art"),
    SkillField("astrogation"),
    SkillField("broker"),
    SkillField("carouse"),
    SkillField("deception"),
    SkillField("diplomat"),
    SkillField("drive"),
    SkillField("electronics"),
    SkillField("engineer"),
    SkillField("explosives"),
    SkillField("flyer"),
    SkillField("gambler"),
    SkillField("gunner"),
    SkillField("gun combat"),
    SkillField("heavy weapon"),
    SkillField("investigate"),
    SkillField("jack of all trades"),
    SkillField("language"),
    SkillField("leadership"),
    SkillField("mechanic"),
    SkillField("medic"),
    SkillField("melee"),
    SkillField("navigation"),
    SkillField("persuade"),
    SkillField("pilot"),
    SkillField("profession"),
    SkillField("recon"),
    SkillField("science"),
    SkillField("stealth"),
    SkillField("steward"),
    SkillField("streetwise"),
    SkillField("survival"),
    SkillField("tactics"),
    SkillField("vac suit"),
]


class FinanceField(Field):
    def __init__(self, name: str):
        super().__init__(name)


FINANCE_FIELDS: list[FinanceField] = [
    FinanceField("living cost"),
    FinanceField("pension"),
    FinanceField("debt"),
    FinanceField("ship payment"),
]


class WeaponField(Field):
    def __init__(
        self,
        name: str,
        desc: str,
        tl: int,
        _range: str,
        damage: int,
        weight: int,
        price: int,
    ):
        super().__init__(name)
        self.desc = desc
        self.tl = tl
        self.range = _range
        self.damage = damage
        self.weight = weight
        self.price = price

    @property
    def description(self):
        return (
            self.desc
            + " TL"
            + str(self.tl)
            + " / "
            + self.range
            + " / "
            + str(self.damage)
            + "D"
        )


WEAPONS_FIELDS: list[WeaponField] = [WeaponField("Stunner", "", 12, "10m", 3, 2, 9000)]


class Equipment(Field):
    def __init__(
        self,
        name: str,
        desc: str,
        tl: int,
        weight: int,
        price: int,
    ):
        super().__init__(name)
        self.desc = desc
        self.tl = tl
        self.weight = weight
        self.price = price


class ArmorField(Equipment):
    pass


ARMORS_FIELDS: list[ArmorField] = [
    ArmorField("Scaphandre", "", 10, 15, 25000),
]


class AugmentField(Equipment):
    pass


AUGMENTS_FIELDS: list[AugmentField] = [
    AugmentField("None", "", 0, 0, 0),
]


class OtherField(Equipment):
    def __init__(
        self,
        name: str,
        desc: str,
        tl: int,
        weight: int,
        price: int,
        number: int = 1
    ):
        super().__init__(name, desc, tl, weight, price)
        self.number = number


OTHERS_FIELDS: list[OtherField] = [
    OtherField("Stim", "Eliminate fatigue", 10, 1, 50, 10),
]


class Renderer:
    def __init__(self):
        self.loader = jinja2.FileSystemLoader(searchpath="./templates")
        self.env = jinja2.Environment(loader=self.loader)

    def render(self):
        template = self.env.get_template(TEMPLATE_FILE)
        content = template.render(
            identity_fields=IDENTITY_FIELDS,
            characteristics_fields=CHARACTERISTICS_FIELDS,
            skills_fields=SKILLS_FIELDS,
            finance_fields=FINANCE_FIELDS,
            weapons_fields=WEAPONS_FIELDS,
            armors_fields=ARMORS_FIELDS,
            augments_fields=AUGMENTS_FIELDS,
            others_fields=OTHERS_FIELDS,
        )

        with open(OUTPUT_FILE, "w") as file:
            file.writelines(content)


def main() -> int:
    renderer = Renderer()
    renderer.render()
    return 0


if __name__ == "__main__":
    sys.exit(main())

import sys
import logging
import os
import jinja2

TEMPLATE_FILE = "overall.html.jinja2"
OUTPUT_FILE = "index.html"


class IdentityField:
    def __init__(
        self,
        name: str,
        placeholder: str | None = None,
        datalist: list[str] | None = None,
        unitlist: list[str] | None = None,
    ):
        self.name = name
        self.placeholder = name if placeholder is None else placeholder
        self.datalist = datalist
        self.unitlist = unitlist


IDENTITY_FIELDS = [
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


class CharacteristicField:
    def __init__(self, name: str):
        self.name = name


CHARACTERISTICS_FIELDS = [
    CharacteristicField("strength"),
    CharacteristicField("dexterity"),
    CharacteristicField("constitution"),
    CharacteristicField("intellect"),
    CharacteristicField("education"),
    CharacteristicField("social"),
]


class SkillField:
    def __init__(self, name: str, option: str | None = None):
        self.name = name
        self.option = option if option else ""


SKILLS_FIELDS = [
    SkillField("admin"),
    SkillField("advocate"),
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
        )

        with open(OUTPUT_FILE, "w") as file:
            file.writelines(content)


def main() -> int:
    renderer = Renderer()
    renderer.render()
    return 0


if __name__ == "__main__":
    sys.exit(main())

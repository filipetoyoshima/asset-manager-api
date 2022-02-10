import Asset from "../model/Asset";
import Company from "../model/Company";
import Person from "../model/Person";
import Unit from "../model/Unit";
import bcrypt from "bcrypt";

export default async function seed () {
    console.log('Removing prior data...');

    await Asset.deleteMany({});
    await Unit.deleteMany({});
    await Person.deleteMany({});
    await Company.deleteMany({});

    console.log('Creating new data...');

    const c1 = await Company.create({
        name: "Freios Supremos",
        description: "This is the first company",
        units: [],
        people: [],
    });

    const u1 = await Unit.create({
        name: "Unidade de Fabricação",
        description: "This is the first unit",
        assets: [],
        company: c1._id,
    });

    await Asset.create({
        name: "Maquina de Calibragem",
        description: "This is the first asset",
        model: "Freio de Roda",
        status: "running",
        healthLevel: 100,
        unit: u1._id,
    })

    await Asset.create({
        name: "Maquina de Calibragem 2",
        description: "This is the second asset",
        model: "Freio de Roda",
        status: "running",
        healthLevel: 98,
        unit: u1._id,
    })

    await Asset.create({
        name: "Maquina de Calibragem 3",
        description: "This is the third asset",
        model: "Freio de Roda",
        status: "running",
        healthLevel: 75,
        unit: u1._id,
    });

    await Asset.create({
        name: "Maquina de Calibragem 4",
        description: "This is the fourth asset",
        model: "Freio de Roda",
        status: "alerting",
        healthLevel: 50,
        unit: u1._id,
    });

    await Asset.create({
        name: "Maquina de Calibragem 5",
        description: "This is the fifth asset",
        model: "Freio de Roda",
        status: "stopped",
        healthLevel: 25,
        unit: u1._id,
    });

    const u2 = await Unit.create({
        name: "Unidade de Testes",
        description: "This is the second unit",
        assets: [],
        company: c1._id,
    });

    await Asset.create({
        name: "Maquina de Testes 1",
        description: "This is the sixth asset",
        model: "Freio de Roda",
        status: "running",
        healthLevel: 100,
        unit: u2._id,
    });

    await Asset.create({
        name: "Maquina de Testes 2",
        description: "This is the seventh asset",
        model: "Freio de Roda",
        status: "running",
        healthLevel: 98,
        unit: u2._id,
    });

    await Asset.create({
        name: "Maquina de Testes 3",
        description: "This is the eighth asset",
        model: "Freio de Roda",
        status: "running",
        healthLevel: 75,
        unit: u2._id,
    });

    await Asset.create({
        name: "Maquina de Testes 4",
        description: "This is the ninth asset",
        model: "Freio de Roda",
        status: "alerting",
        healthLevel: 50,
        unit: u2._id,
    });

    await Asset.create({
        name: "Maquina de Testes 5",
        description: "This is the tenth asset",
        model: "Freio de Roda",
        status: "stopped",
        healthLevel: 25,
        unit: u2._id,
    });

    await Person.create({
        name: "João da Silva",
        email: "joaosilva@mail.com",
        password: bcrypt.hashSync("123456", 10),
    })

    const c2 = await Company.create({
        name: "Company 2",
        description: "This is the second company",
        units: [],
        people: [],
    });

    console.log('Data successfully seeded');
    console.log('Run `npm run dev` to start the server');
}
// 1. Define the DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// 2. Define the TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// 3. Implement the Director class based on DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

// 4. Implement the Teacher class based on TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

// 5. Create a function to instantiate Director or Teacher based on salary
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// 6. Example usage:
console.log(createEmployee(200)); // Teacher instance
console.log(createEmployee(1000)); // Director instance
console.log(createEmployee('$500')); // Director instance

// Checking method calls
const employee1 = createEmployee(200);
console.log(employee1 instanceof Teacher ? employee1.workTeacherTasks() : employee1.workDirectorTasks());

const employee2 = createEmployee(1000);
console.log(employee2 instanceof Director ? employee2.workDirectorTasks() : employee2.workTeacherTasks());


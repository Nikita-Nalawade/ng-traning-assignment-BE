module.exports = (sequelize, DataTypes) => {
    const taskList = sequelize.define("taskList", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        assignedTo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        priority: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comments : {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        timestamps: true
    });

    return taskList;
}
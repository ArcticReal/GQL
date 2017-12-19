import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const TimesheetRoleInputType = new GraphQLInputObjectType({
  name: 'TimesheetRoleInputType',
  description: 'input type for TimesheetRole',

  fields: () => ({
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    timesheetId: {type: GraphQLString}
  })
});

export {TimesheetRoleInputType};
    
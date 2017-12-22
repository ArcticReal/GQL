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

const TimesheetRoleResponseType = new GraphQLObjectType({
  name: 'TimesheetRoleResponseType',
  description: 'response type for TimesheetRole',

  fields: () => ({
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    timesheetId: {type: GraphQLString}
  })
});

export {TimesheetRoleResponseType};
    
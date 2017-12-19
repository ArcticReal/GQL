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

const DataResourceRoleInputType = new GraphQLInputObjectType({
  name: 'DataResourceRoleInputType',
  description: 'input type for DataResourceRole',

  fields: () => ({
    dataResourceId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {DataResourceRoleInputType};
    
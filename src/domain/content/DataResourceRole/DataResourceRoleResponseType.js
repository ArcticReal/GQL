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

const DataResourceRoleResponseType = new GraphQLObjectType({
  name: 'DataResourceRoleResponseType',
  description: 'response type for DataResourceRole',

  fields: () => ({
    dataResourceId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {DataResourceRoleResponseType};
    
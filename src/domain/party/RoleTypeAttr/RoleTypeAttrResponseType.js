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

const RoleTypeAttrResponseType = new GraphQLObjectType({
  name: 'RoleTypeAttrResponseType',
  description: 'response type for RoleTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {RoleTypeAttrResponseType};
    
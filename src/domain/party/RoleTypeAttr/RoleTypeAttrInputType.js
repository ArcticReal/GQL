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

const RoleTypeAttrInputType = new GraphQLInputObjectType({
  name: 'RoleTypeAttrInputType',
  description: 'input type for RoleTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {RoleTypeAttrInputType};
    
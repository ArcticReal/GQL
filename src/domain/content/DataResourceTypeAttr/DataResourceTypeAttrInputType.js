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

const DataResourceTypeAttrInputType = new GraphQLInputObjectType({
  name: 'DataResourceTypeAttrInputType',
  description: 'input type for DataResourceTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    dataResourceTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {DataResourceTypeAttrInputType};
    
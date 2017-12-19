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

const ShipmentTypeAttrInputType = new GraphQLInputObjectType({
  name: 'ShipmentTypeAttrInputType',
  description: 'input type for ShipmentTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    shipmentTypeId: {type: GraphQLString}
  })
});

export {ShipmentTypeAttrInputType};
    
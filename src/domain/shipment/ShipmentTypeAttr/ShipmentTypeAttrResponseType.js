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

const ShipmentTypeAttrResponseType = new GraphQLObjectType({
  name: 'ShipmentTypeAttrResponseType',
  description: 'response type for ShipmentTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    shipmentTypeId: {type: GraphQLString}
  })
});

export {ShipmentTypeAttrResponseType};
    
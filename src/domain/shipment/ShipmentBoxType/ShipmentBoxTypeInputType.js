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

const ShipmentBoxTypeInputType = new GraphQLInputObjectType({
  name: 'ShipmentBoxTypeInputType',
  description: 'input type for ShipmentBoxType',

  fields: () => ({
    boxHeight: {type: GraphQLFloat},
    boxLength: {type: GraphQLFloat},
    boxWeight: {type: GraphQLFloat},
    boxWidth: {type: GraphQLFloat},
    description: {type: GraphQLString},
    dimensionUomId: {type: GraphQLString},
    shipmentBoxTypeId: {type: GraphQLString},
    weightUomId: {type: GraphQLString}
  })
});

export {ShipmentBoxTypeInputType};
    
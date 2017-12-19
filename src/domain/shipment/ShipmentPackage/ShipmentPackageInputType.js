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

const ShipmentPackageInputType = new GraphQLInputObjectType({
  name: 'ShipmentPackageInputType',
  description: 'input type for ShipmentPackage',

  fields: () => ({
    boxHeight: {type: GraphQLFloat},
    boxLength: {type: GraphQLFloat},
    boxWidth: {type: GraphQLFloat},
    dateCreated: {type: GraphQLString},
    dimensionUomId: {type: GraphQLString},
    insuredValue: {type: GraphQLFloat},
    shipmentBoxTypeId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentPackageSeqId: {type: GraphQLString},
    weight: {type: GraphQLFloat},
    weightUomId: {type: GraphQLString}
  })
});

export {ShipmentPackageInputType};
    
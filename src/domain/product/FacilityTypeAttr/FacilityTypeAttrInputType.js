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

const FacilityTypeAttrInputType = new GraphQLInputObjectType({
  name: 'FacilityTypeAttrInputType',
  description: 'input type for FacilityTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    facilityTypeId: {type: GraphQLString}
  })
});

export {FacilityTypeAttrInputType};
    